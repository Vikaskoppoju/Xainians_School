import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notice-ticker',
  imports: [CommonModule, RouterLink],
  templateUrl: './notice-ticker.component.html',
  styleUrl: './notice-ticker.component.scss'
})
export class NoticeTickerComponent {
  notices = [
    'Admissions open for Pre-Nursery to Class X — start your online enquiry today',
    '100% Class X result with 100% distinctions, Session 2024-25',
    '18+ Gold Medals across the International Maths, Science & English Olympiads, 2025',
    'Bhat Saliq-ul-Islam wins Gold at the Junior National Thang Ta Championship 2024',
    'Now offering IIT/NEET Foundation Classes from Class 6th to 10th',
    '17 years of standing up for the students of South Kashmir'
  ];
}
