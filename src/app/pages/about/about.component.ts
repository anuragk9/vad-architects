import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  values = [
    { icon:'🏛️', title:'Timeless Design', desc:'Architecture that transcends trends and stands proud for generations.' },
    { icon:'🌿', title:'Sustainability',  desc:'Every project integrates eco-conscious materials and energy strategies.' },
    { icon:'🔬', title:'Precision',       desc:'Millimeter-level accuracy in planning and on-site execution.' },
    { icon:'🤝', title:'Collaboration',   desc:'Clients are partners — their vision drives our creative process.' }
  ];
  team = [
    { name:'Vikram A. Desai', role:'Principal Architect', img:'https://randomuser.me/api/portraits/men/41.jpg' },
    { name:'Ananya Iyer',     role:'Design Director',     img:'https://randomuser.me/api/portraits/women/38.jpg' },
    { name:'Rohan Mehta',     role:'Structural Engineer',  img:'https://randomuser.me/api/portraits/men/22.jpg' },
    { name:'Sana Shaikh',     role:'Interior Lead',        img:'https://randomuser.me/api/portraits/women/55.jpg' }
  ];
  ngAfterViewInit() {
    const obs = new IntersectionObserver(e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible'); }), { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }
}