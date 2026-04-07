import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-education',
  imports: [CommonModule, FormsModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  education = [
    {
      title: 'Masters Of Computer Application',
      institute: 'School Of Computer Sciences KBCNMU, Jalgaon',
      year: '2023 — 2025'
    },
    {
      title: 'Bachelor of Computer Application',
      institute: 'Institute Of Management, Research and Devlopment, Shahada',
      year: '2020 — 2023'
    }
  ];
}
