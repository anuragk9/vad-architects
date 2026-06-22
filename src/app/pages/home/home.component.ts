import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { Project } from '../../core/models/project.model';
import { ProjectModalComponent } from '../../shared/components/project-modal/project-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectModalComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;

  stats = [
    { num: 120, label: 'Projects Completed' },
    { num: 18,  label: 'Years of Excellence' },
    { num: 34,  label: 'Awards Won' },
    { num: 98,  label: 'Happy Clients' }
  ];

  displayNums: number[] = [0, 0, 0, 0];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.projects = this.data.getProjects();
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          const idx = +(e.target as HTMLElement).dataset['idx']!;
          if (idx !== undefined && !isNaN(idx)) this.animateCounter(idx);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal, .stat-item').forEach(el => observer.observe(el));
  }

  animateCounter(idx: number) {
    const target = this.stats[idx].num;
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        this.displayNums[idx] = target;
        clearInterval(timer);
      } else {
        this.displayNums[idx] = Math.floor(current);
      }
    }, 16);
  }

  openModal(p: Project) {
    this.selectedProject = p;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }
}