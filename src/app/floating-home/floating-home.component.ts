import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-home',
  templateUrl: './floating-home.component.html',
  styleUrls: ['./floating-home.component.css'],
})
export class FloatingHomeComponent {
  isSpinning = false;
  constructor(private router: Router) {}

  scrollToSection(sectionId: string) {
    // If we're not already on the homepage, navigate first
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        this.scroll(sectionId);
      });
    } else {
      this.scroll(sectionId);
    }
  }

  private scroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  spinButton() {
    this.isSpinning = true;

    setTimeout(() => {
      this.isSpinning = false;
      this.scrollToSection('home'); // scroll after animation
    }, 1000); // duration matches CSS animation
  }
}
