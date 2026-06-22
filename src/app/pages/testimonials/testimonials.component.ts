import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { Testimonial } from '../../core/models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  testimonials: Testimonial[] = [];
  trackIndex = 0;

  constructor(private data: DataService) {}

  ngOnInit() { this.testimonials = this.data.getTestimonials(); }
  ngAfterViewInit() {
    const obs = new IntersectionObserver(e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible'); }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }
  stars(n: number) { return Array(n).fill('★'); }
  prev() { if (this.trackIndex > 0) this.trackIndex--; }
  next() { if (this.trackIndex < this.testimonials.length - 1) this.trackIndex++; }
  goTo(i: number) { this.trackIndex = i; }
  get trackTranslate() { return `translateX(-${this.trackIndex * 33.4}%)`; }
}