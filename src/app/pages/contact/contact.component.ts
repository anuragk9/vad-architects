import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  form = { firstName:'', lastName:'', email:'', service:'', message:'' };
  toastVisible = false;

  ngAfterViewInit() {
    const obs = new IntersectionObserver(e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible'); }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  onSubmit() {
    this.toastVisible = true;
    this.form = { firstName:'', lastName:'', email:'', service:'', message:'' };
    setTimeout(() => this.toastVisible = false, 4000);
  }
}