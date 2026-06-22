import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `
    <div class="cursor" id="cursor"></div>
    <div class="cursor-follower" id="cursorFollower"></div>
  `,
  styles: [`
    .cursor { width:10px;height:10px;background:#c8a96e;border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;z-index:9999;transition:transform 0.1s ease; }
    .cursor-follower { width:36px;height:36px;border:1px solid #c8a96e;border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;z-index:9998;transition:transform 0.18s ease;opacity:0.6; }
    @media (max-width: 768px) { .cursor, .cursor-follower { display: none; } }
  `]
})
export class CursorComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('mousemove', (e) => {
        const c = document.getElementById('cursor');
        const f = document.getElementById('cursorFollower');
        if (c) c.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
        if (f) f.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
      });
    }
  }
}