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

    // Contact Information
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text('Email: nangkyawthsuhlaing@gmail.com', 105, 30, {
      align: 'center',
    });
    doc.text('Phone: 09-752961610', 105, 40, { align: 'center' });

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
I am an adaptable, extroverted, and team-oriented junior developer with experience in building dynamic web applications using Angular. My strong foundation in JavaScript, HTML, and CSS, combined with my passion for problem-solving and fostering positive team environments, enables me to thrive in collaborative development projects.
As an extrovert, I excel at building strong connections within teams, facilitating open communication, and ensuring a supportive environment for collaboration. In internship, I developed a student form feature using API, honing my skills in API integration and Angular development while actively engaging with teammates to deliver efficient solutions.
I am eager to bring my skills and outgoing nature to a junior developer role, contributing to innovative projects that promote inclusivity and enhance team dynamics, while continuing to grow as a professional.
    `;
    doc.text(profile, 25, 70, { maxWidth: 170, align: 'left' });

    // Education Section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Education', 20, 140);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text('Bachelor of Science in Mathematics (2018-2019)', 25, 150);
    doc.text('- Mandalar University', 25, 155);

    doc.text(
      'Bachelor of Science in Computer Science in University of The People (2024)',
      25,
      160
    );
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Languages: Myanmar and English', 20, 175); // Adjusted to move further down

    // Skills Section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Skills', 20, 185); // Moved this down a little

    doc.setFont('helvetica', 'normal');
    const skills = [
      '- Problem-Solving',
      '- Teamwork',
      '- Effective Communication',
      '- Time Management',
    ];
    skills.forEach((skill, index) => {
      doc.text(skill, 25, 195 + index * 10); // More spacing for skills
    });

    // Technical Skills Section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Technical Skills', 20, 235); // Moved this section further down

    doc.setFont('helvetica', 'normal');
    const technicalSkills = [
      '- Angular',
      '- Node.js',
      '- PostgreSQL',
      '- Bootstrap',
    ];
    technicalSkills.forEach((techSkill, index) => {
      doc.text(techSkill, 25, 245 + index * 10); // More spacing for technical skills
    });

    // Footer
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.text('Generated with jsPDF - Nang Kyawt Hsu Hlaing', 105, 310, {
      align: 'center',
    });

    // Footer contact information (Moved down further)
    doc.text(
      'For more information, contact: nangkyawthsuhlaing@gmail.com',
      105,
      320,
      {
        align: 'center',
      }
    );

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
