import { Injectable } from '@angular/core';
import { Invention } from './invention.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class InventionService {
  inventions: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.inventions = angularFire.database.list('inventions');
  }

  getInventions() {
    return this.inventions;
  }

  saveInvention(project: Invention) {
    this.inventions.push(project);
  }
}
