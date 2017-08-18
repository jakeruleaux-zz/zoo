
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';


const appRoutes: Routes = [
  {
    path: '',
    component: AnimalListComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
