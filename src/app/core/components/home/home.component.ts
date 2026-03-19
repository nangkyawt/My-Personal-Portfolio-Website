import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  skills: any;
  // this is generated with jsPDF
//  downloadCV(): void {
//   const doc = new jsPDF();

//   // ========== HEADER: Name ==========
//   doc.setFont('helvetica', 'bold');
//   doc.setFontSize(24);
//   doc.text('Nang Kyawt Hsu Hlaing', 105, 20, { align: 'center' });

//   doc.setFont('helvetica', 'normal');
//   doc.setFontSize(12);
//   doc.text('Email: nangkyawthsuhlaing@gmail.com', 105, 30, { align: 'center' });
//   doc.text('Phone: 09-752961610', 105, 38, { align: 'center' });

//   // Horizontal line
//   doc.setLineWidth(0.5);
//   doc.line(15, 45, 195, 45);

//   // ========== PROFILE ==========
//   doc.setFont('helvetica', 'bold');
//   doc.setFontSize(14);
//   doc.text('Profile', 20, 55);

//   doc.setFont('helvetica', 'normal');
//   doc.setFontSize(12);
//   const profile = `
// Adaptable and team-oriented junior developer with experience in building web applications using Angular, JavaScript, HTML, and CSS.
// Strong in problem-solving, teamwork, and effective communication.
// Developed student form feature during internship with API integration and actively collaborated with teammates.
// Eager to contribute to innovative projects and grow professionally.
//   `;
//   doc.text(profile, 25, 60, { maxWidth: 170, align: 'left' });

//   // ========== EDUCATION ==========
//   doc.setFont('helvetica', 'bold');
//   doc.setFontSize(14);
//   doc.text('Education', 20, 110);

//   doc.setFont('helvetica', 'normal');
//   doc.setFontSize(12);
//   doc.text('- B.Sc. Mathematics (2018-2019), Mandalar University', 25, 120);
//   doc.text('- B.Sc. Computer Science (2024), University of the People', 25, 130);

//   // ========== LANGUAGES ==========
//   doc.setFont('helvetica', 'bold');
//   doc.setFontSize(14);
//   doc.text('Languages', 20, 145);
//   doc.setFont('helvetica', 'normal');
//   doc.setFontSize(12);
//   doc.text('- Myanmar (native)', 25, 155);
//   doc.text('- English (fluent)', 25, 160);

//   // ========== SKILLS ==========
//   doc.setFont('helvetica', 'bold');
//   doc.setFontSize(14);
//   doc.text('Soft Skills', 20, 175);
//   doc.setFont('helvetica', 'normal');
//   doc.setFontSize(12);
//   const skills = [
//     '- Problem Solving',
//     '- Teamwork',
//     '- Effective Communication',
//     '- Time Management',
//   ];
//   skills.forEach((skill, i) => doc.text(skill, 25, 185 + i * 8));

//   // ========== TECHNICAL SKILLS ==========
//   doc.setFont('helvetica', 'bold');
//   doc.setFontSize(14);
//   doc.text('Technical Skills', 20, 220);
//   doc.setFont('helvetica', 'normal');
//   doc.setFontSize(12);
//   const technicalSkills = ['- Angular', '- Node.js', '- PostgreSQL', '- Bootstrap'];
//   technicalSkills.forEach((techSkill, i) => doc.text(techSkill, 25, 230 + i * 8));

//   // ========== EXPERIENCE / INTERNSHIP ==========
//   doc.setFont('helvetica', 'bold');
//   doc.setFontSize(14);
//   doc.text('Experience & Internship', 20, 265);
//   doc.setFont('helvetica', 'normal');
//   doc.setFontSize(12);
//   const experience = `
// - Internship at Myanmar Information Technology (Dec 2022 - Feb 2023)
//   Developed student form feature, integrated APIs, collaborated in team projects.
//   `;
//   doc.text(experience, 25, 275, { maxWidth: 170, align: 'left' });

//   // ========== PORTFOLIO ==========
//   doc.setFont('helvetica', 'bold');
//   doc.setFontSize(14);
//   doc.text('Portfolio', 20, 300);
//   doc.setFont('helvetica', 'normal');
//   doc.setFontSize(12);
//   doc.text('- GitHub: https://github.com/nangkyawthsu', 25, 310);
//   doc.text('- LinkedIn: https://www.linkedin.com/in/nangkyawt/', 25, 320);

//   // ========== FOOTER ==========
//   doc.setFont('helvetica', 'italic');
//   doc.setFontSize(10);
//   doc.text('Generated with jsPDF - Nang Kyawt Hsu Hlaing', 105, 330, { align: 'center' });

//   // Save PDF
//   doc.save('Nang_Kyawt_Hsu_Hlaing_CV.pdf');
// }

  constructor(private toastr: ToastrService) {}

  downloadCV(): void {
    const fileURL = 'https://docs.google.com/document/d/1PTP76lKWTWB9xVWe5-51em2zrF1qt_dtYlLX5efXoXE/export?format=pdf';
    window.open(fileURL, '_blank');
    // Show professional toast notification
   this.toastr.success('Thanks for checking my CV!', 'Download Started 🚀');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngAfterViewInit(): void {
    // Intersection Observer for scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Animate all elements with .reveal or .skill-item
    const revealElements = document.querySelectorAll('.reveal, .skill-item');
    revealElements.forEach((el) => observer.observe(el));
  }
}
