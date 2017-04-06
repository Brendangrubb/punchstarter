import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { BackFormComponent } from '../back-form/back-form.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-indiv-project',
  templateUrl: './indiv-project.component.html',
  styleUrls: ['./indiv-project.component.css'],
  providers: [ProjectService]
})
export class IndivProjectComponent implements OnInit {
  projectId: string = null;
  project;

  delete(){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.projectService.deleteProject(this.projectId);
    }
    this.router.navigate(['project-list']);
  }

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = (urlParameters['id']);
    });

    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.project = new Project(
        dataLastEmittedFromObserver.projectName,
        dataLastEmittedFromObserver.creators,
        dataLastEmittedFromObserver.description,
        dataLastEmittedFromObserver.rewards,
        dataLastEmittedFromObserver.moneyGoal,
        dataLastEmittedFromObserver.imgurl,
        dataLastEmittedFromObserver.category
      )
    })
  }
}
