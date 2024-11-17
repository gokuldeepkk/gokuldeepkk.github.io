import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroTextComponent } from "@features/hero-text/hero-text.component";
import { ProfileComponent } from '@features/profile/profile.component';
import { HeaderComponent } from "@core/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroTextComponent, ProfileComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('circularcursor') customCursor!: ElementRef;
  title = 'portfolio';

  @HostListener('document:mousemove', ['$event'])
  mouseMove(event: MouseEvent) {
    this.customCursor.nativeElement.style.marginLeft = event.pageX + 'px';
    this.customCursor.nativeElement.style.marginTop = event.pageY + 'px';
  }

  // @HostListener("document:wheel", ['$event'])
  // mouseWheel(event: WheelEvent) {
  //   const subdivide = 100;
  //   let i = 0;
  //   while(i < subdivide) {
  //     this.mainWindow.nativeElement.scrollLeft += event.deltaY/subdivide;
  //     i++;
  //   }
  // }
}
