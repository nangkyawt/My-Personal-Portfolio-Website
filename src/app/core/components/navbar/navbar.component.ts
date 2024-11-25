import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isDarkMode = false;
  isMenuOpen = false;

  ngOnInit(): void {
    // Check if the user prefers dark mode
    if (localStorage.getItem('darkMode') === 'true') {
      this.toggleDarkMode();
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleDarkMode() {
    console.log('Darkmode work');
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);

    localStorage.setItem('darkMode', String(this.isDarkMode));
  }
  toggleMenu() {
    // Toggle the menu visibility for small screens
    this.isMenuOpen = !this.isMenuOpen;
  }
}
