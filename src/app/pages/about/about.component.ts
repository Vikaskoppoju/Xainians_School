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
    { name: 'Mr. A. Rahman', role: 'Chairman, Managing Committee', avatar: 'https://i.pravatar.cc/200?img=52' },
    { name: 'Mrs. S. Kaul', role: 'Director, Academics', avatar: 'https://i.pravatar.cc/200?img=45' },
    { name: 'Mr. F. Ahmad', role: 'Administrator', avatar: 'https://i.pravatar.cc/200?img=59' },
    { name: 'Principal', role: 'Head of School', avatar: 'https://i.pravatar.cc/200?img=44' }
  ];

  disclosures = [
    { label: 'Affiliation Board', value: 'CBSE (Central Board of Secondary Education)' },
    { label: 'Affiliation Number', value: '1234567' },
    { label: 'School Code', value: '65XXX' },
    { label: 'Type of School', value: 'Co-educational, Day School' },
    { label: 'Land Area', value: '4.5 acres, Batengoo, Anantnag' },
    { label: 'Fire & Safety Certificate', value: 'Valid, renewed annually' },
    { label: 'Building Safety Certificate', value: 'Valid — Structural Engineer certified' },
    { label: 'Recognition Status', value: 'Recognised, Class LKG–XII' }
  ];
}
