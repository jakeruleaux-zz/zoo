
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AnimalListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'faqs',
    component: FaqsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
