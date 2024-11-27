import { Component, OnInit } from '@angular/core';
import { PreloaderService } from '../../../services/preloader.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css'],
})
export class PreloaderComponent implements OnInit {
  isLoading = true;
  countdown = 5;
  subscription: any;
  constructor(private preloaderService: PreloaderService) {}

  // ngOnInit(): void {
  //   this.preloaderService.isLoading$.subscribe((state: boolean) => {
  //     console.log('PreloaderComponent isLoading:', state); // Ensure this toggles
  //     this.isLoading = state;
  //   });
  // }

  ngOnInit(): void {
    // Update countdown every second
    this.subscription = interval(1000).subscribe(() => {
      if (this.countdown > 0) {
        this.countdown--;
      }
    });

    // Listen for changes in loading state
    this.preloaderService.isLoading$.subscribe((state: boolean) => {
      this.isLoading = state;

      if (!state) {
        this.countdown = 0; // Reset countdown when loading ends
        if (this.subscription) {
          this.subscription.unsubscribe(); // Stop countdown when loading ends
        }
      }
    });
  }
}
