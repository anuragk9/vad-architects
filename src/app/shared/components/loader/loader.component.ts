import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader" [class.hide]="hidden">
      <div class="loader-text">
        <span>V</span><span>A</span><span>D</span>
      </div>
    </div>
  `,
  styles: [`
    .loader {
      position: fixed; inset: 0; background: #0a0a0a;
      display: flex; align-items: center; justify-content: center;
      z-index: 10000; transition: opacity 0.6s ease, visibility 0.6s ease;
    }
    .loader.hide { opacity: 0; visibility: hidden; pointer-events: none; }
    .loader-text { font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 8vw, 7rem); letter-spacing: 0.3em; color: #fff; overflow: hidden; display: flex; }
    .loader-text span { display: inline-block; animation: loaderUp 1s cubic-bezier(.76,0,.24,1) forwards; transform: translateY(100%); }
    .loader-text span:nth-child(2) { animation-delay: 0.1s; }
    .loader-text span:nth-child(3) { animation-delay: 0.2s; }
    @keyframes loaderUp { to { transform: translateY(0); } }
  `]
})
export class LoaderComponent implements OnInit {
  hidden = false;
  ngOnInit() {
    setTimeout(() => this.hidden = true, 1800);
  }
}