import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isDarkMode = false;

  ngOnInit(): void {
    // Check if the user prefers dark mode
    if (localStorage.getItem('darkMode') === 'true') {
      this.toggleDarkMode();
    }
  }

  toggleDarkMode() {
    console.log('Darkmode work');
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);

    // Save the dark mode preference to local storage
    localStorage.setItem('darkMode', String(this.isDarkMode));
  }
}
