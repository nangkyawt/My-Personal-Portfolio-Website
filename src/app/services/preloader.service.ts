import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloaderService {
  private isLoadingSubject = new BehaviorSubject<boolean>(true);
  isLoading$ = this.isLoadingSubject.asObservable();

  show() {
    console.log('PreloaderService: show');
    this.isLoadingSubject.next(true);
  }

  hide() {
    console.log('PreloaderService: hide');
    this.isLoadingSubject.next(false);
  }
}
