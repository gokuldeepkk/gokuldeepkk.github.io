import { Component } from '@angular/core';
import { SkillComponent } from '../skill-set/skill/skill.component';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
