import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-academics',
  imports: [CommonModule],
  templateUrl: './academics.component.html',
  styleUrl: './academics.component.scss'
})
export class AcademicsComponent {
  stages = [
    { name: 'Pre-Primary', grades: 'Pre-Nursery · Nursery · LKG', desc: 'Motivating, inspiring and supporting young buds in a safe, loving, play-way environment that builds listening, writing and reading skills.', img: 'assets/gallery/vr-classroom.jpg' },
    { name: 'Primary', grades: 'Class I – V', desc: 'Emphasis on creative and critical abilities, spoken language development, voice modulation and creative writing under proper supervision.', img: 'assets/gallery/picnic-boats.jpg' },
    { name: 'Middle', grades: 'Class VI – VIII', desc: 'Students become active participants in learning, craft their own answers, and develop a scientific temperament across science, social science and language.', img: 'assets/gallery/robotics-lab-girls.jpg' },
    { name: 'Secondary', grades: 'Class IX – X', desc: 'Students are counselled to broaden their knowledge with a creative, critical perspective and a sound foundation for board exams and beyond.', img: 'assets/gallery/science-lab.jpg' }
  ];

  methods = [
    { title: 'Thinkroom Technology', desc: 'Our classrooms are Thinkrooms — aligned to NEP 2020 — where every child thinks, wonders, questions and expresses freely, with the teacher as a facilitator.' },
    { title: 'Chrysalis Approach', desc: 'An innovative, internationally-benchmarked teaching-learning methodology that our parents and staff consistently praise for its real impact in the classroom.' },
    { title: 'AI & Robotics Lab', desc: 'Hands-on experience with the latest technologies, encouraging innovation, creativity and problem-solving from an early age.' },
    { title: 'IIT / NEET Foundation Classes', desc: 'Foundation classes from Class 6th to 10th to build a head-start for competitive exams like IIT, JEE and NEET.' },
    { title: 'Language Lab', desc: 'Technical tools that give students the best samples of pronunciation, stimulating quicker and easier language acquisition.' },
    { title: 'Department of Creative Writing', desc: 'Grooming students\' creative abilities through Free Writing, Hierarchical Easy Writing, Self Writing and Creative Writing.' }
  ];

  subjects = [
    'English', 'Urdu', 'Arabic', 'Mathematics', 'Science', 'Social Science', 'Computer Science',
    'AI & Robotics', 'Physical Education', 'Creative Writing', 'Art & Craft', 'Environmental Studies'
  ];

  examWing = 'Saint Xain\'s International School prioritizes transparency and fairness in exams. Students can access their answer scripts post-exam, allowing them to understand their performance and feedback. Our rigorous exam process ensures academic integrity and the highest standards of trust and fairness.';

  results = [
    { year: '2024-25', headline: '100% Result · 100% Distinctions', detail: '73 scholars appeared for Class X boards. Abdul Hanan, Muhammad Tauha and Sania Maqbool Nisar ranked 3rd and 5th in the Kashmir Division.' },
    { year: '2023-24', headline: 'All 51 Students Score 450+', detail: 'Every student who appeared secured more than 450 marks. Madiha Bilal and Rahil Yousuf secured 2nd and 3rd position in the Kashmir Division.' },
    { year: '2022-23', headline: '100% Result · 80 Students Score 450+', detail: '86 scholars appeared for Class X boards. Faisal Mehraj and Zaid Nisar secured 3rd position in the Kashmir Division.' },
    { year: '2020-21', headline: '100% Result · 100% Distinctions', detail: '70 scholars appeared for Class X boards, with one scholar bagging the 1st position in the Kashmir Division.' },
    { year: '2019-20', headline: '100% Result · 100% Distinctions', detail: '55 scholars appeared for Class X boards, with one scholar achieving the 2nd position in the Kashmir Division.' }
  ];
}
