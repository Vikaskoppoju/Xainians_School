import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface MegaItem {
  label: string;
  path: string;
  desc: string;
}

interface NavLink {
  label: string;
  path: string;
  mega?: MegaItem[];
  megaImage?: string;
  megaImageAlt?: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;
  searchOpen = false;
  searchTerm = '';
  isUrdu = false;
  highContrast = false;
  largeText = false;
  scrolled = false;
  openMega: string | null = null;

  navLinks: NavLink[] = [
    { label: 'About', path: '/about',
      mega: [
        { label: 'Our History', path: '/about', desc: 'Two decades of academic excellence' },
        { label: 'Mission & Vision', path: '/about', desc: 'What drives everything we do' },
        { label: "Principal's Message", path: '/about', desc: 'A welcome from our leadership' },
        { label: 'Management Team', path: '/about', desc: 'Meet the governing committee' },
        { label: 'Mandatory Disclosures', path: '/about', desc: 'Affiliation & compliance details' }
      ],
      megaImage: 'assets/gallery/pen-book.jpg',
      megaImageAlt: 'Saint Xain\'s International School'
    },
    { label: 'Academics', path: '/academics',
      mega: [
        { label: 'Curriculum · Pre-Nursery–X', path: '/academics', desc: 'Stage-wise academic structure' },
        { label: 'Thinkroom & Teaching Methods', path: '/academics', desc: 'NEP 2020-aligned, activity-based pedagogy' },
        { label: 'AI, Robotics & Language Labs', path: '/academics', desc: 'Hands-on technology and language learning' },
        { label: 'Examination Wing', path: '/academics', desc: 'Transparent, fair assessment' },
        { label: 'Board Results', path: '/academics', desc: 'Class X results & Kashmir Division ranks' }
      ],
      megaImage: 'assets/gallery/robotics-lab-girls.jpg',
      megaImageAlt: 'Students in the AI and Robotics Lab'
    },
    { label: 'Admissions', path: '/admissions',
      mega: [
        { label: 'Admission Process', path: '/admissions', desc: 'Four simple steps to enrol' },
        { label: 'Online Enquiry Form', path: '/admissions', desc: 'Start your child\'s journey with us' },
        { label: 'Eligibility & Age Criteria', path: '/admissions', desc: 'Grade-wise entry requirements' },
        { label: 'Downloads', path: '/admissions', desc: 'Admission & transfer certificate forms' }
      ],
      megaImage: 'assets/gallery/graduation-group.jpg',
      megaImageAlt: 'Graduation day at Saint Xain\'s International School'
    },
    { label: 'Faculty', path: '/faculty' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'News', path: '/news' },
    { label: 'Contact', path: '/contact' }
  ];

  searchIndex: { term: string; path: string }[] = [
    { term: 'syllabus', path: '/academics' },
    { term: 'curriculum', path: '/academics' },
    { term: 'exam pattern', path: '/academics' },
    { term: 'results', path: '/academics' },
    { term: 'academic calendar', path: '/academics' },
    { term: 'fee structure', path: '/admissions' },
    { term: 'fee payment', path: '/parent-portal' },
    { term: 'admission form', path: '/admissions' },
    { term: 'scholarship', path: '/admissions' },
    { term: 'achievements', path: '/news' },
    { term: 'olympiad', path: '/news' },
    { term: 'sports', path: '/news' },
    { term: 'contact', path: '/contact' },
    { term: 'gallery', path: '/gallery' },
    { term: 'faculty', path: '/faculty' },
    { term: 'transport', path: '/facilities' },
    { term: 'facilities', path: '/facilities' },
    { term: 'robotics', path: '/facilities' },
    { term: 'ai lab', path: '/facilities' },
    { term: 'thinkroom', path: '/academics' },
    { term: 'parent login', path: '/parent-portal' },
    { term: 'timetable', path: '/parent-portal' },
    { term: 'homework', path: '/parent-portal' }
  ];

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = (typeof window !== 'undefined' ? window.scrollY : 0) > 12;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
    this.openMega = null;
  }

  openMegaMenu(label: string) {
    this.openMega = label;
  }

  closeMegaMenu() {
    this.openMega = null;
  }

  toggleMegaMenu(label: string) {
    this.openMega = this.openMega === label ? null : label;
  }

  toggleSearch() {
    this.searchOpen = !this.searchOpen;
  }

  runSearch() {
    const q = this.searchTerm.trim().toLowerCase();
    if (!q) return;
    const match = this.searchIndex.find(i => i.term.includes(q) || q.includes(i.term));
    this.router.navigateByUrl(match ? match.path : '/news');
    this.searchTerm = '';
    this.searchOpen = false;
  }

  toggleLanguage() {
    this.isUrdu = !this.isUrdu;
  }

  toggleContrast() {
    this.highContrast = !this.highContrast;
    document.documentElement.classList.toggle('high-contrast', this.highContrast);
  }

  toggleTextSize() {
    this.largeText = !this.largeText;
    document.documentElement.classList.toggle('large-text', this.largeText);
  }
}
