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
    { step: 1, title: 'Submit Online Enquiry', desc: 'Fill in the enquiry form below, call, or message us on WhatsApp.' },
    { step: 2, title: 'Campus Visit & Document Check', desc: 'Bring birth certificate, previous report card, and transfer certificate (if applicable).' },
    { step: 3, title: 'Student Interaction', desc: 'A short, friendly interaction appropriate to the grade being applied for.' },
    { step: 4, title: 'Admission Confirmation', desc: 'Our admission office will guide you through fee payment and seat confirmation.' }
  ];

  ageCriteria = [
    { grade: 'Pre-Nursery', age: 'As of 31 March: 2+ years' },
    { grade: 'Nursery', age: 'As of 31 March: 3+ years' },
    { grade: 'LKG', age: 'As of 31 March: 4+ years' },
    { grade: 'Class I and above', age: 'Based on previous class completed' }
  ];

  whyChooseUs = [
    { title: '17 Years of Legacy', desc: 'Standing up for the students of South Kashmir since November 2007.' },
    { title: '100% Class X Results', desc: 'A consistent record of 100% results with distinctions across recent sessions.' },
    { title: 'Thinkroom & AI/Robotics', desc: 'NEP 2020-aligned Thinkroom pedagogy plus a dedicated AI & Robotics Lab.' },
    { title: 'Safe & Secure Campus', desc: '4 blocks, 60 rooms, segregated boys\' and girls\' sections, under CCTV surveillance.' },
    { title: 'GPS-Tracked Transport', desc: 'Buses covering all major routes across Anantnag and Kulgam districts.' },
    { title: 'Transparent Examinations', desc: 'Students can access their answer scripts post-exam for full transparency.' }
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
