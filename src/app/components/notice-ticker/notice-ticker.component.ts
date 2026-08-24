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
    'Admissions open for LKG–XII, Session 2026-27 — Apply before 30 Sept 2026',
    'Annual Sports Day on 12 Sept 2026 at the Batengoo campus ground',
    'Independence Day celebrations: school remains closed on 15 Aug',
    'Parent-Teacher Meeting (PTM) scheduled for 6 Sept 2026',
    'Result of Class X CBSE Board Exams declared — check Parent Portal',
    'International Day of Peace celebration on 21 Sept 2026'
  ];
}
