import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  category: string;
  title: string;
  type: 'photo' | 'video';
  img: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  categories = ['All', 'Annual Day', 'Picnic', 'Sports Day', 'Class Activities', 'Batengoo Campus'];
  active = 'All';

  items: GalleryItem[] = [
    { category: 'Annual Day', title: 'Cultural Performance 2025', type: 'photo', img: 'https://picsum.photos/seed/xis-gal-annual1/500/500' },
    { category: 'Annual Day', title: 'Prize Distribution Ceremony', type: 'photo', img: 'https://picsum.photos/seed/xis-gal-annual2/500/500' },
    { category: 'Annual Day', title: 'Annual Day Highlights Reel', type: 'video', img: 'https://picsum.photos/seed/xis-gal-annual3/500/500' },
    { category: 'Picnic', title: 'Class VI Picnic to Pahalgam', type: 'photo', img: 'https://picsum.photos/seed/xis-gal-picnic1/500/500' },
    { category: 'Picnic', title: 'Nursery Fun Day Out', type: 'photo', img: 'https://picsum.photos/seed/xis-gal-picnic2/500/500' },
    { category: 'Sports Day', title: 'Track & Field Events', type: 'photo', img: 'https://picsum.photos/seed/xis-gal-sports1/500/500' },
    { category: 'Sports Day', title: 'Sports Day March Past', type: 'video', img: 'https://picsum.photos/seed/xis-gal-sports2/500/500' },
    { category: 'Sports Day', title: 'Tug of War Finals', type: 'photo', img: 'https://picsum.photos/seed/xis-gal-sports3/500/500' },
    { category: 'Class Activities', title: 'Science Exhibition Projects', type: 'photo', img: 'https://picsum.photos/seed/xis-gal-class1/500/500' },
    { category: 'Class Activities', title: 'Art & Craft Workshop', type: 'photo', img: 'https://picsum.photos/seed/xis-gal-class2/500/500' },
    { category: 'Batengoo Campus', title: 'Campus Front View', type: 'photo', img: 'https://picsum.photos/seed/xis-gal-campus1/500/500' },
    { category: 'Batengoo Campus', title: 'Virtual Campus Walkthrough', type: 'video', img: 'https://picsum.photos/seed/xis-gal-campus2/500/500' }
  ];

  get filtered(): GalleryItem[] {
    return this.active === 'All' ? this.items : this.items.filter(i => i.category === this.active);
  }

  setActive(cat: string) {
    this.active = cat;
  }
}
