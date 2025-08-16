import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-floating-home',
  templateUrl: './floating-home.component.html',
  styleUrls: ['./floating-home.component.css'],
})
export class FloatingHomeComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 200; // show after scrolling 200px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
