import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  management = [
    { name: 'Dr. Fahmeeda Jan', role: 'Principal', avatar: 'https://i.pravatar.cc/200?img=45' },
    { name: 'Wahid Yousuf', role: 'Head, Department of English', avatar: 'https://i.pravatar.cc/200?img=14' },
    { name: 'Er. Aadil Nazir Naikoo', role: 'Head, Science, Robotics & AI', avatar: 'https://i.pravatar.cc/200?img=53' },
    { name: 'Dr. Riyaz Ahmad Parah', role: 'Head, Department of Social Science', avatar: 'https://i.pravatar.cc/200?img=59' },
    { name: 'Dr. Reyaz Ahmad Wani', role: 'Head, Department of Arabic', avatar: 'https://i.pravatar.cc/200?img=61' },
    { name: 'Irtika Bashir', role: 'HOD, Lower Primary Department', avatar: 'https://i.pravatar.cc/200?img=47' },
    { name: 'Shaan Ulfat', role: 'Head Teacher, Primary Block', avatar: 'https://i.pravatar.cc/200?img=33' },
    { name: 'Insha Abdulla', role: 'Public Relations Officer', avatar: 'https://i.pravatar.cc/200?img=25' }
  ];

  disclosures = [
    { label: 'School Name', value: "Saint Xain's International School" },
    { label: 'Established', value: 'November 2007, Civil Lines (K.P. Road), Anantnag' },
    { label: 'Current Campus', value: 'National Highway, Near Peaks Auto, Uranhall, Anantnag' },
    { label: 'Type of School', value: 'Co-educational, with segregated boys’ and girls’ academic blocks' },
    { label: 'Infrastructure', value: '60 well-ventilated rooms across 4 academic blocks' },
    { label: 'Grades Offered', value: 'Pre-Nursery to Class X' },
    { label: 'Security', value: 'Campus-wide CCTV surveillance' },
    { label: 'Contact', value: '+91 95960 17941 · sxiskashmir@gmail.com' }
  ];
}
