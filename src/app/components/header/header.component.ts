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
      megaImage: 'https://picsum.photos/seed/xis-about-nav/640/480',
      megaImageAlt: 'Xainians International School campus building'
    },
    { label: 'Academics', path: '/academics',
      mega: [
        { label: 'Curriculum · LKG–XII', path: '/academics', desc: 'Stage-wise academic structure' },
        { label: 'Teaching Methods', path: '/academics', desc: 'International, activity-based pedagogy' },
        { label: 'Academic Calendar', path: '/academics', desc: 'Terms, exams and vacations' },
        { label: 'Exam Pattern', path: '/academics', desc: 'Assessment weightage per term' },
        { label: 'Board Results', path: '/academics', desc: 'CBSE Class X & XII outcomes' }
      ],
      megaImage: 'https://picsum.photos/seed/xis-academics-nav/640/480',
      megaImageAlt: 'Students in a smart classroom'
    },
    { label: 'Admissions', path: '/admissions',
      mega: [
        { label: 'Admission Process', path: '/admissions', desc: 'Four simple steps to enrol' },
        { label: 'Online Enquiry Form', path: '/admissions', desc: 'Apply for Session 2026-27' },
        { label: 'Fee Structure', path: '/admissions', desc: 'Grade-wise fee breakdown' },
        { label: 'Scholarships', path: '/admissions', desc: 'Merit & need-based support' },
        { label: 'Important Dates', path: '/admissions', desc: 'Key deadlines this session' }
      ],
      megaImage: 'https://picsum.photos/seed/xis-admissions-nav/640/480',
      megaImageAlt: 'Prospective student visiting the campus'
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
    { term: 'notice', path: '/news' },
    { term: 'circular', path: '/news' },
    { term: 'holiday list', path: '/news' },
    { term: 'contact', path: '/contact' },
    { term: 'gallery', path: '/gallery' },
    { term: 'faculty', path: '/faculty' },
    { term: 'transport', path: '/facilities' },
    { term: 'facilities', path: '/facilities' },
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
