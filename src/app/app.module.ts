import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { AnimalAgePipe } from './animalAge.pipe';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NewAnimalComponent,
    AnimalListComponent,
    EditAnimalComponent,
    AnimalAgePipe,
    AboutComponent,
    ContactComponent,
    FaqsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
