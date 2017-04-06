import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-back-form',
  templateUrl: './back-form.component.html',
  styleUrls: ['./back-form.component.css'],
  providers: [ProjectService]
})
export class BackFormComponent implements OnInit {
  backerForm = false;

  fund(project, backerName, backerAmount) {

  }

  showForm(project) {
    if (this.backerForm) {
      this.backerForm = false;
    } else {
      this.backerForm = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
