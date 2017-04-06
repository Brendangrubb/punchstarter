import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  saveProject(project: Project) {
    this.projects.push(project);
  }

  getProjectById(projectId: string) {
    return this.angularFire.database.object('projects/' + projectId);
  }

  deleteProject(projectId) {
    console.log(projectId);
    var projectInDatabase = this.getProjectById(projectId);
    console.log(projectId);
    projectInDatabase.remove();
  }

  // update(project) {
  //   var thisProject = this.getProjectById(project);
  //   thisProject.update(dataLastEmittedFromObserver => {
  //   project = new Project(
  //       projectName: project.projectName,
  //       creators: project.creators,
  //       description: project.description,
  //       rewards: project.rewards,
  //       moneyGoal: project.moneyGoal,
  //       imgurl: project.imgurl,
  //       category: project.category
  //   }
  // }
}
