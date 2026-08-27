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
    { title: 'AI & Robotics Lab', desc: 'A cutting-edge lab giving students hands-on experience with the latest technologies, empowering them to become innovators and global tech leaders.', img: 'assets/gallery/robot-device.jpg' },
    { title: 'Science Lab', desc: 'Well-equipped labs where practical work is conducted under qualified, expert supervision.', img: 'assets/gallery/science-lab.jpg' },
    { title: 'Computer & Coding Lab', desc: 'Modern systems and high-tech panels supporting our IIT/NEET foundation classes and coding club.', img: 'assets/gallery/coding-lab-boys.jpg' },
    { title: 'Smart Classrooms', desc: 'Elementary classes equipped with Smart TVs and higher classes with high-tech 4-in-1 panels, plus VR-enabled learning.', img: 'assets/gallery/vr-classroom.jpg' },
    { title: 'Language Lab', desc: 'Technical tools that give students the best samples of pronunciation, helping them acquire languages quickly and easily.', img: 'assets/gallery/pen-book.jpg' },
    { title: 'GPS-Tracked Transport', desc: 'Well-maintained buses plying all major routes across Anantnag and Kulgam districts, each equipped with precise GPS tracking.', img: 'assets/gallery/transport-buses-1.jpg' },
    { title: 'Segregated, Secure Campus', desc: '60 well-ventilated rooms across 4 blocks, with completely separated academic blocks for boys and girls, under constant CCTV surveillance.', img: 'assets/gallery/graduation-group.jpg' },
    { title: 'School Cinema', desc: 'A research-oriented program using specially created films to teach students life skills, values and attitudes — and to bring parents into the circle of learning.', img: 'assets/gallery/picnic-ride.jpg' }
  ];
}
