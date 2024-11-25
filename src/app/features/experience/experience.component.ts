import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Experience = {
  timeline: string;
  company: string;
  designation: string;
  description: string;
  skills: string[];
};

@Component({
  selector: 'experience-sect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      timeline: 'Feb 22 - Present',
      company: 'Carelon Global Solutions',
      designation: 'Sr Software Engineer',
      description:
        "Primary responsibility involved developing high quality REST API's for mobile applications using NodeJS and Express. Built a micro service in AWS Lambda. \nI was also involved in developing a administrative portal for dynamically managing the content of a mobile app in Angular and NodeJS. During my tenure here I have also gained exposure to AEM UI, Dynamo DB and other technologies",
      skills: ['NodeJS', 'Angular', 'SCSS', 'Docker', 'HTML/CSS', 'AWS'],
    },
    {
      timeline: 'May 19 - Jan 22',
      company: 'Moonraft Innovation Labs',
      designation: 'Software Engineer',
      description:
        'Here I primarily gained exposure to multiple verticals of software development. I was part of the team that developed the official website for Moonraft in Angular. Developed an automation framework in Groovy for the TajHotels project. I was also put into a role which involved wearing various hats, like building REST API in NodeJS, creating mobile automation framework for Perfecto testing etc.',
      skills: ['Angular', 'NodeJS', 'ExpressJS', 'REST', 'Groovy'],
    },
    {
      timeline: 'May 16 - Apr 19',
      company: 'Capgemini',
      designation: 'Associate Consultant',
      description:
        'Worked on MGM Resorts web portals as part of the test automation team. Primary responsibilities involved creating automation scripts with Java and Selenium. Trained and lead a team of 5 testers. Also worked in development of a test report generator using Python and Django framework. During which I also made a team internal Google chrom extension to randomly generate user data.',
      skills: ['Java', 'Python', 'Django', 'Jenkins', 'Selenium', 'VBScript'],
    },
    {
      timeline: 'Sep 15 - Apr 19',
      company: 'Wizroots Technologies',
      designation: 'Web Developer',
      description:
        'I was part of a team that built highly functional websites like Vincent Invest which showed various indicators for a stock using PHP/SQL for backend and Ajax/JQuery for frontend tech stack. Also gained insights into CMS systems like Wordpress, Joomla etc.',
      skills: [
        'HTML5',
        'JQuery',
        'Ajax',
        'PHP',
        'CodeIgniter',
        'Bootstrap',
        'MVC',
      ],
    },
  ];

  selectedExperience?: Experience;

  onHover(exp: Experience) {
    this.selectedExperience = exp;
  }

  hideCard() {
    this.selectedExperience = undefined;
  }
}
