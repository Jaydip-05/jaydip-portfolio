import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { SkillsSectionComponent } from "./components/skills-section/skills-section.component";
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactMeComponent } from "./components/contact-me/contact-me.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { EducationComponent } from "./components/education/education.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent, AboutMeComponent, SkillsSectionComponent, ProjectsComponent, ContactMeComponent, ExperienceComponent, EducationComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jaydip-portfolio';
}
