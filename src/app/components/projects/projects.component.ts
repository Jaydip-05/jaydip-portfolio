import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [FormsModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

   projects = [
    {
      title: 'Masa Analytics',
      description: 'Data analytics platform with dashboards and reports.',
      image: 'assets/project1.png',
      technologies: ['React', 'Next.js', 'D3.js']
    },
    {
      title: 'FestTrack Pro',
      description: 'Event management system with booking features.',
      image: 'assets/project2.png',
      technologies: ['Angular', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'DevWriter',
      description: 'Blog platform for developers with markdown support.',
      image: 'assets/project3.png',
      technologies: ['TypeScript', 'Firebase', 'Tailwind']
    }
  ];

}
