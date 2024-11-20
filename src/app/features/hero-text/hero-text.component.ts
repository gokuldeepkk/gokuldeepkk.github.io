import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { IMAGE_ASSET } from '@shared/constants';

@Component({
  selector: 'app-hero-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-text.component.html',
  styleUrl: './hero-text.component.scss'
})
export class HeroTextComponent {
  downloadIconPath = IMAGE_ASSET + '/download-icon.svg';

  downloadResume() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'files/resume.pdf');
    link.setAttribute('download', `gokul.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
