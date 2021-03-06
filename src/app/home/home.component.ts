import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService]
})
export class HomeComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
