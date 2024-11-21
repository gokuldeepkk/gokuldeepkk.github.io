import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  skills = [
    {
      category: 'FRONT END',
      list: ['HTML5', 'SCSS', 'JS/JQuery', 'Angular', 'Bootstrap'],
    },
    {
      category: 'BACK END',
      list: ['NodeJS', 'Express']
    }
  ];
}
