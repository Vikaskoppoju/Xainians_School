import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-parent-portal',
  imports: [CommonModule, FormsModule],
  templateUrl: './parent-portal.component.html',
  styleUrl: './parent-portal.component.scss'
})
export class ParentPortalComponent {
  loggedIn = false;
  error = '';
  credentials = { studentId: '', password: '' };

  features = [
    { icon: '📅', title: 'Attendance', desc: 'Daily attendance records and monthly summaries.' },
    { icon: '📊', title: 'Report Cards', desc: 'Term-wise assessment and progress reports.' },
    { icon: '💳', title: 'Fee Payment', desc: 'Pay tuition and other fees securely online.' },
    { icon: '📝', title: 'Homework', desc: 'Daily homework and assignment updates.' },
    { icon: '🗓️', title: 'PTM Schedule', desc: 'Upcoming parent-teacher meeting slots.' },
    { icon: '📢', title: 'Circulars', desc: 'School notices addressed to your child\'s class.' }
  ];

  onLogin(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(c => c.markAsTouched());
      return;
    }
    this.error = 'This is a demo portal. Please contact the school office for your real login credentials.';
  }
}
