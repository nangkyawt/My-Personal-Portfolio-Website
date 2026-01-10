import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements AfterViewInit {

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initObserver();

    // 🔥 WATCH dark-mode changes
    const body = document.body;
    const mutationObserver = new MutationObserver(() => {
      this.resetAnimations();
    });

    mutationObserver.observe(body, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  private initObserver() {
    const revealElements =
      this.el.nativeElement.querySelectorAll('.reveal');

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.25 });

    revealElements.forEach((el: Element) => this.observer.observe(el));
  }

  private resetAnimations() {
    const revealElements =
      this.el.nativeElement.querySelectorAll('.reveal');

    revealElements.forEach((el: Element) => {
      el.classList.remove('active');
    });

    // force reflow → restart animation
    void document.body.offsetHeight;
  }
}
