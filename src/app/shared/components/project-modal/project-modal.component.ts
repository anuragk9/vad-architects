import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  @Input() project!: Project;
  @Output() closed = new EventEmitter<void>();

  lightboxOpen = false;
  lightboxIndex = 0;

  close() { this.closed.emit(); }
  onOverlayClick(e: MouseEvent) { if ((e.target as HTMLElement).classList.contains('modal-overlay')) this.close(); }
  openLightbox(i: number) { this.lightboxIndex = i; this.lightboxOpen = true; }
  closeLightbox() { this.lightboxOpen = false; }
  prevImage() { this.lightboxIndex = (this.lightboxIndex - 1 + this.project.images.length) % this.project.images.length; }
  nextImage() { this.lightboxIndex = (this.lightboxIndex + 1) % this.project.images.length; }
  stars(n: number) { return Array(n).fill('★'); }
}