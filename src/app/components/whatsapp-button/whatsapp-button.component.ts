import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss'
})
export class WhatsappButtonComponent {
  message = encodeURIComponent('Hi, I want admission details for Xainians International School.');
  phone = '911234567890';
}
