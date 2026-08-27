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
    { value: '17', label: 'Years of Standing Up for the Students' },
    { value: '2007', label: 'Founded in Anantnag' },
    { value: '4', label: 'Academic Blocks · 60 Rooms' },
    { value: '100%', label: 'Class X Result, 2024-25' }
  ];

  programs = [
    { name: 'Pre-Primary', grades: 'Pre-Nursery · Nursery · LKG', img: 'assets/gallery/vr-classroom.jpg' },
    { name: 'Primary', grades: 'Class I – V', img: 'assets/gallery/picnic-boats.jpg' },
    { name: 'Middle School', grades: 'Class VI – VIII', img: 'assets/gallery/robotics-lab-girls.jpg' },
    { name: 'Secondary', grades: 'Class IX – X', img: 'assets/gallery/science-lab.jpg' }
  ];

  highlights = [
    { icon: '🤖', title: 'AI & Robotics Lab', text: 'Hands-on Thinkroom technology empowering students to become innovators and tomorrow’s tech leaders.' },
    { icon: '🎬', title: 'School Cinema', text: 'A research-oriented program using film to teach life skills, values and attitudes.' },
    { icon: '🗣️', title: 'Language Lab', text: 'Technical tools that help students perfect pronunciation and acquire languages faster.' },
    { icon: '🚌', title: 'GPS-Tracked Transport', text: 'Well-maintained buses covering all major routes across Anantnag and Kulgam districts.' },
    { icon: '📝', title: 'Transparent Examinations', text: 'Students can access their answer scripts post-exam, ensuring fairness and trust.' },
    { icon: '🛡️', title: 'Segregated & Secure Campus', text: 'Separate boys’ and girls’ blocks across our 4-block campus, under constant CCTV surveillance.' }
  ];

  campusLife = [
    { caption: 'Graduation Day', img: 'assets/gallery/graduation-group.jpg' },
    { caption: 'AI & Robotics Lab', img: 'assets/gallery/robotics-lab-girls.jpg' },
    { caption: 'Science Lab', img: 'assets/gallery/science-lab.jpg' },
    { caption: 'Coding Club', img: 'assets/gallery/coding-lab-boys.jpg' },
    { caption: 'Picnic Day', img: 'assets/gallery/picnic-ride.jpg' },
    { caption: 'School Transport', img: 'assets/gallery/transport-buses-1.jpg' }
  ];

  testimonials = [
    {
      quote: 'Your commitment to nurturing not only academic excellence but also values, discipline and creativity is truly commendable. We have seen tremendous growth and confidence in our children.',
      name: 'Dr. Akhtar Hussain',
      role: 'Block Medical Officer · Parent',
      avatar: 'https://i.pravatar.cc/120?img=13'
    },
    {
      quote: 'Saint Xain’s International School is admirable for its exemplary conceptual pedagogy that empowers students with strong capabilities and confidence for higher studies and competitive examinations.',
      name: 'Feroze Ahmad Khandy',
      role: 'Assistant Professor, Higher Education Dept., J&K',
      avatar: 'https://i.pravatar.cc/120?img=52'
    },
    {
      quote: 'One can’t turn a blind eye to the stupendous progress made by Saint Xain’s. Even through the pandemic, the school raised the bar of education, topping the Class 10th board exams.',
      name: 'Dr. Manzoor Ahmad Dar',
      role: 'Parent',
      avatar: 'https://i.pravatar.cc/120?img=33'
    }
  ];

  achievements = [
    { tag: '2024-25', title: '100% Result with 100% Distinctions', desc: '73 scholars appeared for Class X boards; Abdul Hanan, Muhammad Tauha and Sania Maqbool Nisar ranked 3rd and 5th in the Kashmir Division.', img: 'assets/gallery/graduation-group.jpg' },
    { tag: '2025', title: 'Gold Medal, Khelo India Youth Games', desc: 'Bhat Saliq-ul-Islam won bronze in Thangta at Khelo India and gold at the Junior National Thang Ta Championship 2024.', img: 'assets/gallery/picnic-ride.jpg' },
    { tag: '2025', title: 'International Olympiad Toppers', desc: 'Dozens of our scholars won Gold Medals across the International Maths, Science and English Olympiads (IMO, ISO, IEO).', img: 'assets/gallery/coding-lab-boys.jpg' }
  ];
}
