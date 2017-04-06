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
    var projectInDatabase = this.getProjectById(projectId);
    projectInDatabase.remove();
  }

  // update(projectId) {
  //   var thisProject = this.getProjectById(projectId);
  //   thisProject.update(dataLastEmittedFromObserver => {
  //   newProject = new Project(
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
