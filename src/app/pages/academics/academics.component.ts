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
    { name: 'Pre-Primary', grades: 'LKG – UKG', desc: 'Play-way learning, phonics, motor skills, and Montessori-inspired activities.', img: 'https://picsum.photos/seed/xis-stage-preprimary/500/380' },
    { name: 'Primary', grades: 'I – V', desc: 'Foundational literacy, numeracy, EVS and activity-based learning.', img: 'https://picsum.photos/seed/xis-stage-primary/500/380' },
    { name: 'Middle', grades: 'VI – VIII', desc: 'Concept-based teaching with STEM, languages, and skill electives.', img: 'https://picsum.photos/seed/xis-stage-middle/500/380' },
    { name: 'Secondary', grades: 'IX – X', desc: 'CBSE curriculum with focused board-exam preparation.', img: 'https://picsum.photos/seed/xis-stage-secondary/500/380' },
    { name: 'Senior Secondary', grades: 'XI – XII', desc: 'Science, Commerce & Humanities streams with career counselling.', img: 'https://picsum.photos/seed/xis-stage-senior/500/380' }
  ];

  methods = [
    { title: 'Inquiry-Based Learning', desc: 'Students explore concepts through questions, projects and hands-on activities.' },
    { title: 'Smart-Class Integration', desc: 'Digital boards and multimedia content across every classroom.' },
    { title: 'Global Curriculum Elements', desc: 'CBSE core enriched with international pedagogy and life-skills modules.' },
    { title: 'Continuous Assessment', desc: 'Regular formative assessments alongside term examinations.' }
  ];

  subjects = [
    'English', 'Hindi/Urdu', 'Mathematics', 'Science', 'Social Science', 'Computer Science',
    'Physical Education', 'Art & Craft', 'Environmental Studies', 'Physics', 'Chemistry', 'Biology',
    'Commerce', 'Economics', 'Accountancy', 'Business Studies', 'Political Science', 'History'
  ];

  calendar = [
    { term: 'Term I Begins', date: '01 April 2026' },
    { term: 'Summer Vacation', date: '15 June – 15 July 2026' },
    { term: 'Half-Yearly Examinations', date: '22 – 30 Sept 2026' },
    { term: 'Winter Break', date: '25 Dec 2026 – 02 Jan 2027' },
    { term: 'Annual Examinations', date: '05 – 20 March 2027' },
    { term: 'Result Declaration', date: '31 March 2027' }
  ];

  examPattern = [
    { component: 'Periodic Tests', weight: '10 Marks' },
    { component: 'Notebook Submission', weight: '5 Marks' },
    { component: 'Subject Enrichment Activity', weight: '5 Marks' },
    { component: 'Half-Yearly Examination', weight: '80 Marks' },
    { component: 'Annual Examination', weight: '80 Marks' }
  ];

  results = [
    { year: '2025', metric: 'Class X Pass %', value: '100%' },
    { year: '2025', metric: 'Class XII Pass %', value: '98.5%' },
    { year: '2024', metric: 'Class X Pass %', value: '100%' },
    { year: '2024', metric: 'Class XII Pass %', value: '97%' }
  ];
}
