import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Invention } from './invention.model';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InventionListComponent } from './invention-list/invention-list.component';

const appRoutes : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'invention-list',
    component: InventionListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
