import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {
  services = [
    { num:'01', icon:'✏️', title:'Architectural Design',  desc:'Full-scope concept development, schematic design, and construction documentation tailored to your vision.' },
    { num:'02', icon:'🏙️', title:'Urban Planning',        desc:'Master planning, mixed-use development, and urban regeneration for cities that work beautifully.' },
    { num:'03', icon:'🛋️', title:'Interior Design',       desc:'Space planning, material selection, and bespoke interiors that harmonize with the architectural shell.' },
    { num:'04', icon:'🌿', title:'Sustainable Design',    desc:'LEED-aligned strategies, passive design principles, and renewable-energy integration from day one.' },
    { num:'05', icon:'📐', title:'Project Management',    desc:'On-site supervision, contractor coordination, and quality assurance so your project stays on track.' },
    { num:'06', icon:'🖥️', title:'3D Visualization',      desc:'Photorealistic renders and virtual walkthroughs that let you inhabit a space before it is built.' }
  ];
  ngAfterViewInit() {
    const obs = new IntersectionObserver(e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible'); }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }
}