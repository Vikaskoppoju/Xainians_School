import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faculty',
  imports: [CommonModule],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.scss'
})
export class FacultyComponent {
  stats = [
    { value: '2007', label: 'Founded, growing from just 4-5 teachers' },
    { value: '17', label: 'Years of Standing Up for the Students' },
    { value: '4', label: 'Academic Blocks · 60 Rooms' },
    { value: '100%', label: 'Class X Result, 2024-25' }
  ];

  teachers = [
    { name: 'Dr. Fahmeeda Jan', subject: 'Principal', qualification: 'Leading the school\'s mission of holistic, personalized education.', avatar: 'https://i.pravatar.cc/240?img=45' },
    { name: 'Wahid Yousuf', subject: 'Head, Department of English', qualification: 'M.A., B.Ed., CTET-I & II, Certified English Language Trainer.', avatar: 'https://i.pravatar.cc/240?img=14' },
    { name: 'Er. Aadil Nazir Naikoo', subject: 'Head, Science, Robotics & AI', qualification: 'B.Tech, M.Tech (Gold Medalist).', avatar: 'https://i.pravatar.cc/240?img=53' },
    { name: 'Mushtaq Ahmad Bhat', subject: 'Department of Mathematics', qualification: 'M.A. (Mathematics), B.Ed.', avatar: 'https://i.pravatar.cc/240?img=11' },
    { name: 'Dr. Riyaz Ahmad Parah', subject: 'Head, Department of Social Science', qualification: 'MA, MPhil, PhD.', avatar: 'https://i.pravatar.cc/240?img=59' },
    { name: 'Dr. Reyaz Ahmad Wani', subject: 'Head, Department of Arabic', qualification: 'Studied at King Saud University, Riyadh & Islamic University of Medina; Ph.D. in Arabic, Kashmir University.', avatar: 'https://i.pravatar.cc/240?img=61' },
    { name: 'Irtika Bashir', subject: 'HOD, Lower Primary Department', qualification: 'Master\'s in Economics, Certified Trainer in English Language & Blended Learning.', avatar: 'https://i.pravatar.cc/240?img=47' },
    { name: 'Shaan Ulfat', subject: 'Head Teacher, Primary Block', qualification: 'Leading the Primary Block\'s activity-based learning approach.', avatar: 'https://i.pravatar.cc/240?img=33' }
  ];

  training = [
    'Thinkroom technology training aligned with National Education Policy (NEP) 2020',
    'Continuous training of teachers in Chrysalis and AI-driven personalized teaching approaches',
    'In-house training on smart-class technology, robotics and digital tools',
    'Annual teacher orientation before the start of each academic session'
  ];
}
