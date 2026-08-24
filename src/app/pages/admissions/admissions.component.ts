import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface EnquiryModel {
  studentName: string;
  dob: string;
  gradeApplying: string;
  parentName: string;
  phone: string;
  email: string;
  address: string;
  message: string;
}

@Component({
  selector: 'app-admissions',
  imports: [CommonModule, FormsModule],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.scss'
})
export class AdmissionsComponent {
  submitted = false;

  model: EnquiryModel = {
    studentName: '',
    dob: '',
    gradeApplying: '',
    parentName: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  };

  documentFile: File | null = null;

  process = [
    { step: 1, title: 'Submit Online Enquiry', desc: 'Fill in the enquiry form below or call the admission office.' },
    { step: 2, title: 'Campus Visit & Document Check', desc: 'Bring birth certificate, previous report card, and transfer certificate (if applicable).' },
    { step: 3, title: 'Student Interaction', desc: 'A short, friendly interaction/assessment appropriate to the grade.' },
    { step: 4, title: 'Offer & Fee Payment', desc: 'Confirm the seat by paying the admission fee within the given window.' }
  ];

  ageCriteria = [
    { grade: 'LKG', age: 'As of 31 March: 3+ years' },
    { grade: 'UKG', age: 'As of 31 March: 4+ years' },
    { grade: 'Class I', age: 'As of 31 March: 5+ years' },
    { grade: 'Class II and above', age: 'Based on previous class completed' }
  ];

  fees = [
    { grade: 'LKG – UKG', admission: '₹8,000', tuitionPerAnnum: '₹36,000' },
    { grade: 'I – V', admission: '₹9,000', tuitionPerAnnum: '₹42,000' },
    { grade: 'VI – VIII', admission: '₹10,000', tuitionPerAnnum: '₹48,000' },
    { grade: 'IX – X', admission: '₹11,000', tuitionPerAnnum: '₹54,000' },
    { grade: 'XI – XII', admission: '₹12,500', tuitionPerAnnum: '₹60,000' }
  ];

  importantDates = [
    { label: 'Enquiry Forms Open', date: '01 August 2026' },
    { label: 'Last Date to Apply', date: '30 September 2026' },
    { label: 'Interaction/Assessment', date: '05 – 15 October 2026' },
    { label: 'Admission Confirmation', date: 'By 25 October 2026' },
    { label: 'Session Begins', date: '01 April 2027' }
  ];

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.documentFile = input.files && input.files.length ? input.files[0] : null;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(c => c.markAsTouched());
      return;
    }
    this.submitted = true;
    form.resetForm();
    this.documentFile = null;
  }
}
