import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Testimonial } from '../models/testimonial.model';

@Injectable({ providedIn: 'root' })
export class DataService {

  getProjects(): Project[] {
    return [
      {
        id: 1, name: 'The Meridian Tower', category: 'Commercial', year: '2023',
        location: 'Mumbai, India', area: '42,000 sqft',
        desc: 'A landmark 28-storey commercial tower redefining the Mumbai skyline. The Meridian Tower uses a double-skin facade for optimal thermal performance while creating a striking visual identity through its parametrically designed exterior.',
        thumb: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
          'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=900&q=80',
          'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80',
          'https://images.unsplash.com/photo-1497366754035-f200968a7efa?w=900&q=80'
        ]
      },
      {
        id: 2, name: 'Horizon Residences', category: 'Residential', year: '2022',
        location: 'Pune, India', area: '18,500 sqft',
        desc: 'A collection of 12 luxury villas set within a curated landscape. Each home is oriented to capture prevailing breezes and maximize natural light, featuring courtyard gardens and locally-sourced stone facades.',
        thumb: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80',
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80'
        ]
      },
      {
        id: 3, name: 'The Green Pavilion', category: 'Cultural', year: '2022',
        location: 'Bengaluru, India', area: '8,200 sqft',
        desc: 'A public arts pavilion nestled within a city park. Structural bamboo forms the primary frame, filled with polycarbonate panels to flood the interior with diffused natural light.',
        thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
          'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80',
          'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80',
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=900&q=80'
        ]
      },
      {
        id: 4, name: 'Nova Office Campus', category: 'Corporate', year: '2021',
        location: 'Hyderabad, India', area: '65,000 sqft',
        desc: 'A sprawling tech campus for a Fortune 500 client. Four interconnected blocks surround a central commons, encouraging collaboration. Rooftop gardens and solar canopies offset 40% of the campus energy load.',
        thumb: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80',
          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
          'https://images.unsplash.com/photo-1497366754035-f200968a7efa?w=900&q=80',
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80'
        ]
      },
      {
        id: 5, name: 'Serenity Spa Resort', category: 'Hospitality', year: '2021',
        location: 'Goa, India', area: '22,000 sqft',
        desc: 'A boutique eco-resort on the Goan coast. Low-slung pavilion structures are woven into the existing tree canopy. Thatched roofs, rammed-earth walls, and natural pools.',
        thumb: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=80',
          'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=80',
          'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=80'
        ]
      },
      {
        id: 6, name: 'Luminary Museum', category: 'Cultural', year: '2020',
        location: 'Delhi, India', area: '31,000 sqft',
        desc: 'A contemporary art museum with a monolithic sandstone exterior punctuated by sculpted light apertures. The interior circulation unfolds as a promenade architecturale through seven gallery volumes.',
        thumb: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=900&q=80',
          'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=900&q=80',
          'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=900&q=80',
          'https://images.unsplash.com/photo-1576020799627-aeac74d58064?w=900&q=80'
        ]
      }
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      { name: 'Arjun Mehta', role: 'CEO, Meridian Corp', rating: 5, quote: 'VAD transformed our brief into a tower that has become the talk of Mumbai. Their attention to detail and communication throughout was unmatched.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { name: 'Priya Sharma', role: 'Homeowner, Horizon Residences', rating: 5, quote: 'We handed VAD a blank site and a dream. What they delivered was beyond imagination — every corner of our home feels intentional and alive.', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
      { name: 'Rahul Nair', role: 'Director, Nova Technologies', rating: 5, quote: 'The campus is not just an office — it is a place people genuinely want to be. Productivity and morale have never been higher. VAD gets it.', avatar: 'https://randomuser.me/api/portraits/men/56.jpg' },
      { name: 'Sunita Reddy', role: 'Founder, Serenity Resorts', rating: 5, quote: 'Our guests consistently say the resort itself is the experience. VAD understood our sustainability ethos from day one and elevated it architecturally.', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
      { name: 'Vikram Joshi', role: 'Curator, Luminary Museum', rating: 5, quote: 'Working with VAD on the museum was a genuine dialogue between art and architecture. The result speaks for itself — we are booked six months ahead.', avatar: 'https://randomuser.me/api/portraits/men/21.jpg' }
    ];
  }
}