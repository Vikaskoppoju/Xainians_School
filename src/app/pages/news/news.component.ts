import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  circulars = [
    { date: '20 Aug 2026', title: 'Notice: Fee Payment Deadline Extended to 31 Aug' },
    { date: '12 Aug 2026', title: 'Circular: PTM Schedule for Term I' },
    { date: '05 Aug 2026', title: 'Circular: Uniform Guidelines for Winter Session' },
    { date: '28 Jul 2026', title: 'Notice: Admission Enquiry Window Now Open' }
  ];

  holidays = [
    { occasion: 'Independence Day', date: '15 Aug 2026' },
    { occasion: 'Eid-ul-Adha (tentative)', date: '27 Aug 2026' },
    { occasion: 'Gandhi Jayanti', date: '02 Oct 2026' },
    { occasion: 'Diwali Break', date: '08 – 12 Nov 2026' },
    { occasion: 'Winter Vacation', date: '25 Dec 2026 – 02 Jan 2027' }
  ];

  competitions = [
    { title: 'Inter-School Science Exhibition', date: '18 Sept 2026', desc: 'Hosted by Xainians International School for schools across Anantnag.' },
    { title: 'National Level Painting Competition', date: '02 Oct 2026', desc: 'Open to students of Classes III–VIII across the region.' },
    { title: 'Inter-House Debate Championship', date: '15 Oct 2026', desc: 'Annual debate competition among the four school houses.' }
  ];

  achievements = [
    'Class XII topper secured 98.5% in CBSE Board Exams 2025-26.',
    'Under-14 football team — District Champions, 2025-26.',
    'School bagged 1st prize at the Regional Science Fair, Srinagar.',
    'Student selected for the State-level Robotics Olympiad Finals.'
  ];

  intlDays = [
    { day: 'International Day of Peace', date: '21 Sept 2026' },
    { day: 'World Teachers\' Day', date: '05 Oct 2026' },
    { day: 'Children\'s Day', date: '14 Nov 2026' },
    { day: 'International Mother Language Day', date: '21 Feb 2027' }
  ];
}
