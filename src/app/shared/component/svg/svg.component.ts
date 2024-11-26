import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'svg-icon',
  standalone: true,
  imports: [],
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.scss',
})
export class SvgComponent {
  @Input() path!: string;
  svgIcon: any;

  constructor(
    private _httpClient: HttpClient,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnChanges() {
    if (!this.path) {
      this.svgIcon = '';
      return;
    }
    console.log('PATH', this.path);

    this._httpClient
      .get(this.path, { responseType: 'text' })
      .subscribe((value) => {
        console.log(value);
        this.svgIcon = this._sanitizer.bypassSecurityTrustHtml(value);
      });
  }
}
