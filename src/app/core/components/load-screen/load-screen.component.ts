import { Component } from '@angular/core';

@Component({
  selector: 'app-load-screen',
  standalone: true,
  imports: [],
  templateUrl: './load-screen.component.html',
  styleUrl: './load-screen.component.scss',
})
export class LoadScreenComponent {
  ngOnInit() {
    const preloader = document.getElementById('load-screen');
    if (preloader) {
      // Remove it from the DOM after the animation completes
      setTimeout(() => {
        preloader.classList.add('slide-up');
      }, 1000);
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 3000);
    }
  }
}
