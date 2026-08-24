import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), title: 'Home | Xainians International School' },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), title: 'About Us | Xainians International School' },
  { path: 'academics', loadComponent: () => import('./pages/academics/academics.component').then(m => m.AcademicsComponent), title: 'Academics | Xainians International School' },
  { path: 'admissions', loadComponent: () => import('./pages/admissions/admissions.component').then(m => m.AdmissionsComponent), title: 'Admissions | Xainians International School' },
  { path: 'faculty', loadComponent: () => import('./pages/faculty/faculty.component').then(m => m.FacultyComponent), title: 'Faculty & Staff | Xainians International School' },
  { path: 'facilities', loadComponent: () => import('./pages/facilities/facilities.component').then(m => m.FacilitiesComponent), title: 'Facilities | Xainians International School' },
  { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent), title: 'Gallery | Xainians International School' },
  { path: 'news', loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent), title: 'News & Events | Xainians International School' },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent), title: 'Contact Us | Xainians International School' },
  { path: 'parent-portal', loadComponent: () => import('./pages/parent-portal/parent-portal.component').then(m => m.ParentPortalComponent), title: 'Parent Portal | Xainians International School' },
  { path: 'privacy-policy', loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent), title: 'Privacy Policy | Xainians International School' },
  { path: 'terms', loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent), title: 'Terms & Conditions | Xainians International School' },
  { path: '**', redirectTo: '' }
];
