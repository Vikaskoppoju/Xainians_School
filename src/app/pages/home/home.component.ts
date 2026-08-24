import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NoticeTickerComponent } from '../../components/notice-ticker/notice-ticker.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, NoticeTickerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  stats = [
    { value: '25+', label: 'Years of Excellence' },
    { value: '1800+', label: 'Students' },
    { value: '110+', label: 'Qualified Faculty' },
    { value: '1:18', label: 'Student:Teacher Ratio' }
  ];

  programs = [
    { name: 'Pre-Primary', grades: 'LKG – UKG', img: 'https://picsum.photos/seed/xis-preprimary/600/450' },
    { name: 'Primary', grades: 'I – V', img: 'https://picsum.photos/seed/xis-primary/600/450' },
    { name: 'Middle School', grades: 'VI – VIII', img: 'https://picsum.photos/seed/xis-middle/600/450' },
    { name: 'Senior Secondary', grades: 'IX – XII', img: 'https://picsum.photos/seed/xis-senior/600/450' }
  ];

  highlights = [
    { icon: '🏫', title: 'Smart Classrooms', text: 'Digital boards and interactive learning across LKG to XII.' },
    { icon: '🔬', title: 'Science & Computer Labs', text: 'Fully-equipped physics, chemistry, biology and computer labs.' },
    { icon: '📚', title: 'Rich Library', text: 'Over 15,000 titles including reference and digital resources.' },
    { icon: '🚌', title: 'Safe Transport', text: 'GPS-enabled buses covering Anantnag and nearby areas.' },
    { icon: '🎭', title: 'Auditorium', text: 'A 500-seat auditorium for events, seminars and performances.' },
    { icon: '🛡️', title: 'CCTV & Security', text: 'Round-the-clock surveillance and trained security staff.' }
  ];

  campusLife = [
    { caption: 'Annual Day', img: 'https://picsum.photos/seed/xis-annualday/500/500' },
    { caption: 'Sports Day', img: 'https://picsum.photos/seed/xis-sportsday/500/500' },
    { caption: 'Science Fair', img: 'https://picsum.photos/seed/xis-sciencefair/500/500' },
    { caption: 'Class Picnic', img: 'https://picsum.photos/seed/xis-picnic/500/500' },
    { caption: 'Library Hour', img: 'https://picsum.photos/seed/xis-library/500/500' },
    { caption: 'Batengoo Campus', img: 'https://picsum.photos/seed/xis-campus/500/500' }
  ];

  testimonials = [
    {
      quote: 'The teachers genuinely know every child by name. My daughter looks forward to school every single day.',
      name: 'Farah Bashir',
      role: 'Parent, Class IV',
      avatar: 'https://i.pravatar.cc/120?img=47'
    },
    {
      quote: 'Smart classrooms and a real focus on sports made the transition from another school seamless for my son.',
      name: 'Imtiyaz Sheikh',
      role: 'Parent, Class VIII',
      avatar: 'https://i.pravatar.cc/120?img=12'
    },
    {
      quote: 'From the science labs to the annual exhibition, Xainians pushed me to think beyond textbooks.',
      name: 'Areeba Manzoor',
      role: 'Alumna, Class of 2024',
      avatar: 'https://i.pravatar.cc/120?img=32'
    }
  ];

  events = [
    { date: '12 SEP', title: 'Annual Sports Day', desc: 'Batengoo campus ground, 9:00 AM onwards.', img: 'https://picsum.photos/seed/xis-event-sports/500/340' },
    { date: '21 SEP', title: 'International Day Celebration', desc: 'Cultural showcase with our exchange partner schools.', img: 'https://picsum.photos/seed/xis-event-intl/500/340' },
    { date: '02 OCT', title: 'Gandhi Jayanti Programme', desc: 'Assembly, essay writing and cleanliness drive.', img: 'https://picsum.photos/seed/xis-event-gandhi/500/340' }
  ];
}
