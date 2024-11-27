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

  constructor(
    private router: Router,
    private preloaderService: PreloaderService
  ) {}

  // ngOnInit(): void {
  //   // Subscribe to PreloaderService observable
  //   this.preloaderService.isLoading$.subscribe((state: boolean) => {
  //     this.isLoading = state;
  //   });

  //   // Listen to router events for route changes
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationStart) {
  //       // Show the preloader when navigation starts
  //       this.preloaderService.show();
  //     }

  //     if (event instanceof NavigationEnd) {
  //       setTimeout(() => this.preloaderService.hide(), 1000); // Adjust delay
  //     }
  //   });
  // }

  ngOnInit(): void {
    // Flag to check if it's the initial load
    const isInitialLoad = !sessionStorage.getItem('initialLoadDone');

    if (isInitialLoad) {
      // First load: Take 10 seconds
      sessionStorage.setItem('initialLoadDone', 'true');
      this.preloaderService.show();

      setTimeout(() => {
        this.preloaderService.hide();
      }, 10000); // 10 seconds
    } else {
      // Subsequent refresh or navigation: Default 5 seconds
      this.preloaderService.show();

      setTimeout(() => {
        this.preloaderService.hide();
      }, 5000); // 5 seconds
    }

    // Subscribe to the loader service for real-time loading state updates
    this.preloaderService.isLoading$.subscribe((state: boolean) => {
      this.isLoading = state;
    });

    // Handle router events for navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Show the loader on route change
        this.preloaderService.show();
      }

      if (event instanceof NavigationEnd) {
        // Hide the loader after 5 seconds for navigations
        setTimeout(() => this.preloaderService.hide(), 500); // Short delay for navigation transitions
      }
    });
  }
}
