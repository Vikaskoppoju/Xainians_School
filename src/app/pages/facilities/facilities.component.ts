import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facilities',
  imports: [CommonModule],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.scss'
})
export class FacilitiesComponent {
  facilities = [
    { title: 'Smart Classrooms', desc: 'Interactive digital boards and multimedia-enabled teaching in every classroom.', img: 'https://picsum.photos/seed/xis-fac-smartclass/600/450' },
    { title: 'Science Labs', desc: 'Dedicated Physics, Chemistry and Biology labs equipped for CBSE practicals.', img: 'https://picsum.photos/seed/xis-fac-sciencelab/600/450' },
    { title: 'Computer Lab', desc: 'Modern systems with high-speed internet for coding and digital literacy.', img: 'https://picsum.photos/seed/xis-fac-computerlab/600/450' },
    { title: 'Library', desc: 'Over 15,000 books, journals, and a dedicated digital reading corner.', img: 'https://picsum.photos/seed/xis-fac-library/600/450' },
    { title: 'Sports Ground', desc: 'Large multi-purpose ground for football, cricket, athletics and PT.', img: 'https://picsum.photos/seed/xis-fac-sports/600/450' },
    { title: 'Transport', desc: 'GPS-tracked buses on multiple routes across Anantnag district.', img: 'https://picsum.photos/seed/xis-fac-transport/600/450' },
    { title: 'CCTV Surveillance', desc: '24x7 monitored campus with cameras in classrooms and common areas.', img: 'https://picsum.photos/seed/xis-fac-cctv/600/450' },
    { title: 'Auditorium', desc: '500-seat air-conditioned auditorium for events and performances.', img: 'https://picsum.photos/seed/xis-fac-auditorium/600/450' },
    { title: 'Cafeteria', desc: 'Hygienic in-house cafeteria serving nutritious meals and snacks.', img: 'https://picsum.photos/seed/xis-fac-cafeteria/600/450' },
    { title: 'Medical Room', desc: 'On-campus first-aid room with a visiting doctor and trained nurse.', img: 'https://picsum.photos/seed/xis-fac-medical/600/450' }
  ];
}
