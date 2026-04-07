import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-experience',
  imports: [CommonModule,FormsModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {


  experiences = [
    {
      role: 'Software Engineer',
      company: 'RBIS Technology Pvt. Ltd.',
      duration: 'Dec 2024 - Present',

    },
  ];

}
