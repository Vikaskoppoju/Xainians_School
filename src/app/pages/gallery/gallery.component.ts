import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  category: string;
  title: string;
  img: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  categories = ['All', 'Graduation Day', 'AI & Robotics', 'Science Lab', 'Picnic', 'Smart Classrooms', 'Transport'];
  active = 'All';

  items: GalleryItem[] = [
    { category: 'Graduation Day', title: 'Class X Farewell-cum-Graduation, Batch 2023-24', img: 'assets/gallery/graduation-group.jpg' },
    { category: 'Graduation Day', title: 'Certificate Distribution Ceremony', img: 'assets/gallery/graduation-certificate.jpg' },
    { category: 'Graduation Day', title: 'Handing Over the Graduation Scroll', img: 'assets/gallery/graduation-handshake.jpg' },
    { category: 'AI & Robotics', title: 'Students Building a Robot in the AI & Robotics Lab', img: 'assets/gallery/robotics-lab-girls.jpg' },
    { category: 'AI & Robotics', title: 'A Student-Built Robot, Proudly Branded', img: 'assets/gallery/robot-device.jpg' },
    { category: 'AI & Robotics', title: 'Coding Club in Session', img: 'assets/gallery/coding-lab-boys.jpg' },
    { category: 'Science Lab', title: 'Practical Work Under Expert Supervision', img: 'assets/gallery/science-lab.jpg' },
    { category: 'Smart Classrooms', title: 'VR-Enabled Learning in the Classroom', img: 'assets/gallery/vr-classroom.jpg' },
    { category: 'Picnic', title: 'A Day Out on the Paddle Boats', img: 'assets/gallery/picnic-boats.jpg' },
    { category: 'Picnic', title: 'Picnic Day Amusement Ride', img: 'assets/gallery/picnic-ride.jpg' },
    { category: 'Transport', title: 'Our GPS-Tracked School Bus Fleet', img: 'assets/gallery/transport-buses-1.jpg' },
    { category: 'Transport', title: 'Buses Serving Anantnag & Kulgam Routes', img: 'assets/gallery/transport-buses-2.jpg' }
  ];

  get filtered(): GalleryItem[] {
    return this.active === 'All' ? this.items : this.items.filter(i => i.category === this.active);
  }

  setActive(cat: string) {
    this.active = cat;
  }
}
