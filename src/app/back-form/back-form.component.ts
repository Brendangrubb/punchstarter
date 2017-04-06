import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-form',
  templateUrl: './back-form.component.html',
  styleUrls: ['./back-form.component.css'],
  providers: [ProjectService]
})
export class BackFormComponent implements OnInit {
  @Input() project;
  backerForm = false;

  // fund(backerName, backerAmount) {
  //   update(this.project);
  //   this.backerForm = false;
  // }

  showForm() {
    if (this.backerForm) {
      this.backerForm = false;
    } else {
      this.backerForm = true;
    }
  }

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
  }
}
