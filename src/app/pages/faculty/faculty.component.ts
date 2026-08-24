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
    { value: '112', label: 'Total Faculty' },
    { value: '1:18', label: 'Student:Teacher Ratio' },
    { value: '68%', label: 'Post-Graduate & Above' },
    { value: '40+', label: 'Trainings / Year' }
  ];

  teachers = [
    { name: 'Ms. Aaliya Bashir', subject: 'Principal', qualification: 'M.Ed, M.A. English · 22 yrs experience', avatar: 'https://i.pravatar.cc/240?img=44' },
    { name: 'Mr. Imran Wani', subject: 'Vice Principal / Mathematics', qualification: 'M.Sc Mathematics, B.Ed · 18 yrs experience', avatar: 'https://i.pravatar.cc/240?img=13' },
    { name: 'Mrs. Nusrat Jan', subject: 'Head — Science Department', qualification: 'M.Sc Physics, B.Ed · 15 yrs experience', avatar: 'https://i.pravatar.cc/240?img=48' },
    { name: 'Mr. Faizan Malik', subject: 'Computer Science', qualification: 'MCA, B.Ed · 10 yrs experience', avatar: 'https://i.pravatar.cc/240?img=15' },
    { name: 'Mrs. Rukhsana Ahmad', subject: 'Head — Primary Wing', qualification: 'B.El.Ed, M.A. Education · 14 yrs experience', avatar: 'https://i.pravatar.cc/240?img=29' },
    { name: 'Ms. Sana Mir', subject: 'English & Languages', qualification: 'M.A. English, B.Ed · 9 yrs experience', avatar: 'https://i.pravatar.cc/240?img=25' },
    { name: 'Mr. Tariq Bhat', subject: 'Physical Education', qualification: 'B.P.Ed, NIS Certified Coach', avatar: 'https://i.pravatar.cc/240?img=51' },
    { name: 'Mrs. Zoya Rashid', subject: 'Pre-Primary Coordinator', qualification: 'Montessori Diploma, NTT · 11 yrs experience', avatar: 'https://i.pravatar.cc/240?img=35' }
  ];

  training = [
    'Regular CBSE-affiliated workshops on curriculum and pedagogy updates',
    'In-house training on smart-class technology and digital tools',
    'Life-skills, inclusive education, and child psychology sessions',
    'Annual teacher orientation before the start of each academic session'
  ];
}
