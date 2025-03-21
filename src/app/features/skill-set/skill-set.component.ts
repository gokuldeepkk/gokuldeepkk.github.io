import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  skills = [
    {
      category: 'FRONTEND',
      list: ['HTML5', 'SCSS', 'JS/JQuery', 'Angular', 'Bootstrap'],
      image: '/images/frontend.png',
    },
    {
      category: 'BACKEND',
      list: ['NodeJS', 'Express', 'MongoDB', 'Python', 'Java'],
      image: '/images/backend.png',
    },
    {
      category: 'TOOLS',
      list: ['Github', 'Bamboo', 'Jest', 'TypeScript', 'Docker', 'Figma'],
      image: '/images/tools.png',
    },
  ];
}
