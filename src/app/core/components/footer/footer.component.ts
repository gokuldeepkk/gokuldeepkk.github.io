import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgComponent } from '@shared/component/svg/svg.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SvgComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  mediaLinks = [
    {
      name: 'github',
      logo: '/images/icons/github.svg',
      link: 'https://github.com/gokuldeepkk',
    },
    {
      name: 'instagram',
      logo: '/images/icons/instagram.svg',
      link: 'https://www.instagram.com/gokul_deep41',
    },
    {
      name: 'linkedin',
      logo: '/images/icons/linkedin.svg',
      link: 'https://www.linkedin.com/in/gokul-deep-kk/',
    },
  ];
}
