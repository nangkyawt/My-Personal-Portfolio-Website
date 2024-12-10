import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  skills: any;
  downloadCV(): void {
    console.log('Download CV');
    const doc = new jsPDF();

    // Header: Name and Job Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.text('Nang Kyawt Hsu Hlaing', 105, 20, { align: 'center' });

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(16);
    doc.text('Junior MEAN Stack Developer', 105, 30, { align: 'center' });

    // Contact Information
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text('Email: nangkyawthsuhlaing@gmail.com', 105, 40, {
      align: 'center',
    });
    doc.text('Phone: 09-752961610', 105, 47, { align: 'center' });

    // Horizontal Line
    doc.setLineWidth(0.5);
    doc.line(15, 55, 195, 55);

    // Profile Section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Profile', 20, 65);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    const profile = `
  I am an adaptable, extroverted, and team-oriented individual with experience in fostering 
  positive work environments. With strong communication, collaboration, and 
  problem-solving skills, I am eager to contribute to creating an inclusive 
  and supportive culture. I’m excited to bring my skills to the People and 
  Culture team and support initiatives that enhance workplace culture.
    `;
    doc.text(profile, 25, 75, { maxWidth: 170, align: 'left' });

    // Education Section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Education', 20, 120);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text('- Bachelor of Science in Mathematics (2018-2019)', 25, 130);
    doc.text('- Mandalar University', 25, 137);

    doc.text('- University of The People (2024)', 25, 150);
    doc.text('- Languages: Myanmar and English', 25, 157);

    // Skills Section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Skills', 20, 170);

    const skills = [
      '- Problem-Solving',
      '- Teamwork',
      '- Effective Communication',
      '- Time Management',
    ];
    skills.forEach((skill, index) => {
      doc.text(skill, 25, 180 + index * 10);
    });

    // Technical Skills Section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Technical Skills', 20, 220);

    const technicalSkills = [
      '- Angular',
      '- Node.js',
      '- PostgreSQL',
      '- Bootstrap',
    ];
    technicalSkills.forEach((techSkill, index) => {
      doc.text(techSkill, 25, 230 + index * 10);
    });

    // Footer
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.text('Generated with jsPDF - Nang Kyawt Hsu Hlaing', 105, 290, {
      align: 'center',
    });

    // Save the PDF
    doc.save('Nang_Kyawt_Hsu_Hlaing_CV.pdf');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
