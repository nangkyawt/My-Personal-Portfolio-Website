import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { PreloaderService } from './services/preloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isLoading: any;
  AOS: any;
  constructor(
    private router: Router,
    private preloaderService: PreloaderService
  ) {}

  ngOnInit(): void {
    const isInitialLoad = !sessionStorage.getItem('initialLoadDone');

    if (isInitialLoad) {
      sessionStorage.setItem('initialLoadDone', 'true');
      this.preloaderService.show();

      setTimeout(() => {
        this.preloaderService.hide();
      }, 10000);
    } else {
      this.preloaderService.show();

      setTimeout(() => {
        this.preloaderService.hide();
      }, 5000);
    }

    this.preloaderService.isLoading$.subscribe((state: boolean) => {
      this.isLoading = state;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.preloaderService.show();
      }

      if (event instanceof NavigationEnd) {
        setTimeout(() => this.preloaderService.hide(), 500);
      }
    });

    this.AOS.init({
      duration: 1200, // Adjust duration as needed
      once: true, // Ensures animations happen only once
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.AOS.refresh(); // Refresh AOS after navigation
      }
    });
  }
}
