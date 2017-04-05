import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent implements OnInit {

  addNewProject(projectName: string, creators: string, description: string, rewards: string, moneyGoal: number, imgurl: string, category: string) {
    var newProject: Project = new Project(projectName, creators, description, rewards, moneyGoal, imgurl, category);
    this.projectService.saveProject(newProject);
  }

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

}
