import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  downloadCV(): void {
    console.log('Download CV');
    const doc = new jsPDF();

    // Set title (name)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.text('Nang Kyawt Hsu Hlaing', 20, 20);

    // Job title and contact info
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.text('Junior MEAN Stack Developer', 20, 30);
    doc.text(
      'Email: nangkyawthsuhlaing@gmail.com | Phone: 09-752961610',
      20,
      40
    );

    // Add spacing before sections
    doc.setFontSize(14);
    doc.text('Skills:', 20, 55);
    doc.setFontSize(12);
    doc.text('- Problem-Solving', 20, 65);
    doc.text('- Teamwork', 20, 75);
    doc.text('- Effective communication', 20, 85);
    doc.text('- Time Management', 20, 95);

    // Add spacing before technical skills
    doc.setFontSize(14);
    doc.text('Technical Skills:', 20, 110);
    doc.setFontSize(12);
    doc.text('- Angular', 20, 120);
    doc.text('- Node.js', 20, 130);
    doc.text('- PostgreSQL', 20, 140);
    doc.text('- Bootstrap', 20, 150);

    // Add experience section
    doc.setFontSize(14);
    doc.text('Experience:', 20, 165);
    doc.setFontSize(12);
    doc.text(
      'During my internship at Myanmar Information Technology, I developed a Student Form app using Angular, Node.js, and PostgreSQL.',
      20,
      175,
      { maxWidth: 170 }
    );

    // Save the PDF with a filename
    doc.save('Nang_Kyawt_Hsu_Hlaing_CV.pdf');
  }
}
