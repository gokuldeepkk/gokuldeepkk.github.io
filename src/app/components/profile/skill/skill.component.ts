import { Component, Input, SimpleChanges } from '@angular/core';
import { IMAGE_ASSET } from '../../../commons/constants';

@Component({
  selector: 'skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @Input('name') skillName?: string;
  @Input('logo') skillLogo?: string;

  getLogoPath() {
    return this.skillLogo ? IMAGE_ASSET + this.skillLogo : '';
  }
}
