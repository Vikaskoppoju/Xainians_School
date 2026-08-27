import { Routes } from '@angular/router';

const SCHOOL = "Saint Xain's International School";

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), title: `Home | ${SCHOOL}` },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), title: `About Us | ${SCHOOL}` },
  { path: 'academics', loadComponent: () => import('./pages/academics/academics.component').then(m => m.AcademicsComponent), title: `Academics | ${SCHOOL}` },
  { path: 'admissions', loadComponent: () => import('./pages/admissions/admissions.component').then(m => m.AdmissionsComponent), title: `Admissions | ${SCHOOL}` },
  { path: 'faculty', loadComponent: () => import('./pages/faculty/faculty.component').then(m => m.FacultyComponent), title: `Faculty & Staff | ${SCHOOL}` },
  { path: 'facilities', loadComponent: () => import('./pages/facilities/facilities.component').then(m => m.FacilitiesComponent), title: `Facilities | ${SCHOOL}` },
  { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent), title: `Gallery | ${SCHOOL}` },
  { path: 'news', loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent), title: `Achievements & News | ${SCHOOL}` },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent), title: `Contact Us | ${SCHOOL}` },
  { path: 'parent-portal', loadComponent: () => import('./pages/parent-portal/parent-portal.component').then(m => m.ParentPortalComponent), title: `Parent Portal | ${SCHOOL}` },
  { path: 'privacy-policy', loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent), title: `Privacy Policy | ${SCHOOL}` },
  { path: 'terms', loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent), title: `Terms & Conditions | ${SCHOOL}` },
  { path: '**', redirectTo: '' }
];
