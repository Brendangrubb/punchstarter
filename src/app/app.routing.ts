import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Project } from './project.model';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { IndivProjectComponent } from './indiv-project/indiv-project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'project-list',
    component: ProjectListComponent
  },
  {
    path: 'new-project',
    component: NewProjectComponent
  },
  {
    path: 'projects/:id',
    component: IndivProjectComponent
  },
  {
    path: 'edit-project',
    component: EditProjectComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
