import { Component, OnInit } from '@angular/core';
import { Invention } from '../invention.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { InventionService } from '../invention.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [InventionService]
})
export class HomeComponent implements OnInit {
  inventions: FirebaseListObservable<any[]>;

  constructor(private inventionService: InventionService, private router: Router) { }

  ngOnInit() {
    this.inventions = this.inventionService.getInventions();
  }

}
