import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  academicResults = [
    { year: '2024-25', detail: '73 scholars appeared for Class X boards — 100% result, 100% distinctions. Abdul Hanan, Muhammad Tauha and Sania Maqbool Nisar ranked 3rd and 5th in the Kashmir Division.' },
    { year: '2023-24', detail: 'All 51 students who appeared secured more than 450 marks. Madiha Bilal and Rahil Yousuf secured 2nd and 3rd position in the Kashmir Division.' },
    { year: '2022-23', detail: '86 scholars appeared for Class X boards — 100% result, with 80 scholars scoring 450+ marks. Faisal Mehraj and Zaid Nisar secured 3rd position in the Kashmir Division.' },
    { year: '2020-21', detail: '70 scholars appeared for Class X boards — 100% result, 100% distinctions, with one scholar bagging the 1st position in the Kashmir Division.' },
    { year: '2019-20', detail: '55 scholars appeared for Class X boards — 100% result, 100% distinctions, with one scholar achieving the 2nd position in the Kashmir Division.' }
  ];

  sportsAchievements = [
    'Bhat Saliq-ul-Islam won Gold in the Junior National Thang Ta Championship 2024 (LNIPE Gwalior) and 3rd position in Phunaba Ama-60kg at the 6th Khelo India Youth Games, Tamil Nadu.',
    'Babar Bashir was chosen for the Under-14 district cricket team (2025); Saad Nisar for the Under-17 district football team (2025).',
    'Our students won gold, silver and bronze medals at the Thang Ta Tournament hosted by our school.',
    'The school received 12 medals in Geet Kune Do (2019) and 15 medals in Wushu.',
    'Adiyan Amin, Uzair and Karamat brought accolades in Kabaddi (2021); Soha Abbas and Munaza Shafi played Volleyball at the State level.',
    'Soman Zahoor bagged 2nd position in an inter-zonal road race (2021); the school won the championship at an inter-zonal competition in 2022.'
  ];

  olympiadHighlights = [
    { exam: 'International Maths Olympiad (IMO)', count: '18+ Gold Medals, 2025' },
    { exam: 'International Science Olympiad (ISO)', count: '20+ Gold Medals, 2025' },
    { exam: 'International English Olympiad (IEO)', count: '12+ Gold Medals, 2025' }
  ];

  growthPartners = ['School Cinema', 'GNeet', 'Oxford International', 'Science Olympiad Foundation (SOF)'];

  testimonials = [
    {
      quote: 'Saint Xain International School is a gateway where we enter and are able to see a beautiful transformation of the children in terms of self discovery, polishing up the potential of every child.',
      name: 'S. Tariq',
      role: 'Senior Journalist & Political Cartoonist, Kashmir Images'
    },
    {
      quote: 'We are extremely happy and thankful to Saint Xain\'s for introducing us to the innovative teaching methodology which is Chrysalis. The overall impact in the field of education is remarkable.',
      name: 'Hamidullah Allaie',
      role: 'Senior Lecturer · Parent'
    },
    {
      quote: 'We are so grateful to the management for maintaining marvelous quality in education. The painstaking efforts they are putting in stand unwavering.',
      name: 'Hamidullah Dar',
      role: 'Naib Tehsildar, Qaziqund · Parent'
    }
  ];
}
