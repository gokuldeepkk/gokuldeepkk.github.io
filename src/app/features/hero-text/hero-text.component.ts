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
  // @ViewChild('heroText') heroText!: ElementRef;
  // @HostListener('document:mousemove', ['$event'])
  // mouseMove(event: any) {
  //   if(event.target && event.target.className === 'effect-text') {
  //     this.highlightText(event);
  //   } else {
  //     this.removeHighlight(event);
  //   }
  // }

  // highlightText(event: MouseEvent) {
  //   const pctX = (+event.offsetX)*100/(+this.heroText.nativeElement.offsetWidth);
  //   const pctY = (this.getYOffset(event.target) + event.offsetY)*100/(+this.heroText.nativeElement.offsetHeight);
  //   const bg = `radial-gradient(circle closest-corner at ${pctX}% ${pctY}%, #f15025, #ffdcd2)`;
  //   this.heroText.nativeElement.style.backgroundImage = bg;
  //   this.heroText.nativeElement.style.backgroundClip = 'text';
  //   this.heroText.nativeElement.style.color = 'transparent';
  // }

  // removeHighlight(event: MouseEvent) {
  //   this.heroText.nativeElement.style.backgroundImage = 'none';
  //   this.heroText.nativeElement.style.backgroundClip = 'none';
  //   this.heroText.nativeElement.style.color = '#ffffff';
  // }

  // getYOffset(element: any) {
  //   const eleHeight = +element.offsetHeight;
    
  //   if(element.previousSibling && element.nextSibling) {
  //     return eleHeight; // 2nd Text
  //   }
  //   if(element.previousSibling && !element.nextSibling) {
  //     return 2 * eleHeight; //Last Text
  //   }
  //   return 0;
  // }
}
