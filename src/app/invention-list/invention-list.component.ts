import { Component, OnInit } from '@angular/core';
import { Invention } from '../invention.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { InventionService } from '../invention.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invention-list',
  templateUrl: './invention-list.component.html',
  styleUrls: ['./invention-list.component.css'],
  providers: [InventionService]
})
export class InventionListComponent implements OnInit {
  inventions: FirebaseListObservable<any[]>;

  constructor(private inventionService: InventionService, private router: Router) { }

  ngOnInit() {
    this.inventions = this.inventionService.getInventions();
  }

}
