import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  imports: [],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent {
  skillCategories = [
    {
      title: 'Frontend Development',
      icon: '📦',
      description: 'Building interactive, high-performance user interfaces with modern frameworks.',
      tags: ['HTML', 'CSS', 'JavaScript','Angular', 'TypeScript', 'Bootstrap'],
      details: [
        'Single Page Applications (SPA)',
        'Responsive & Adaptive Design',
        'Component-Driven Architecture'
      ]
    },
    {
      title: 'Backend Architecture',
      icon: '🗄️',
      description: 'Designing robust server-side logic and scalable database structures.',
      tags: ['C#', '.NET Core','Entity Framework','REST APIs', 'PostgreSQL', 'MySQL', 'Python', 'RESTful APIs'],
      details: [
        'Microservices Architecture',
        'Database Normalization & Querying',
        'Authentication (JWT/OAuth)',
      ]
    },
    {
      title: 'Tools & Systems',
      icon: '🛠️',
      description: 'Streamlining workflows and maintaining efficient deployment pipelines.',
      tags: ['Git', 'Azure DevOps', 'CI/CD', 'Postman'],
      details: [
        'Version Control & Git Flow',
        'Automated Pipelines (GitHub Actions)',
        'API Documentation & Testing'
      ]
    }
  ];
}
