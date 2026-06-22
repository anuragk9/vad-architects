import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { Project } from '../../core/models/project.model';
import { ProjectModalComponent } from '../../shared/components/project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: Project[] = [];
  filtered: Project[] = [];
  categories: string[] = [];
  activeCategory = 'All';
  selectedProject: Project | null = null;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.projects = this.data.getProjects();
    this.filtered = this.projects;
    const cats = ['All', ...new Set(this.projects.map(p => p.category))];
    this.categories = cats;
  }

  ngAfterViewInit() {
    const obs = new IntersectionObserver(e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible'); }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  filter(cat: string) {
    this.activeCategory = cat;
    this.filtered = cat === 'All' ? this.projects : this.projects.filter(p => p.category === cat);
  }

  openModal(p: Project) { this.selectedProject = p; document.body.style.overflow = 'hidden'; }
  closeModal() { this.selectedProject = null; document.body.style.overflow = ''; }
}