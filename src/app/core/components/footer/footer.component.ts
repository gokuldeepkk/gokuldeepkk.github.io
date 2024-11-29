import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaLinksComponent } from './media-links/media-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MediaLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
