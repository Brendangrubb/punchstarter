import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
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
  projects: FirebaseListObservable<any[]>;
  projectId: string;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = (urlParameters['id']);
    });
  }

}
