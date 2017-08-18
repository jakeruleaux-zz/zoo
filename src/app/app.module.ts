import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { AnimalAgePipe } from './animalAge.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewAnimalComponent,
    AnimalListComponent,
    EditAnimalComponent,
    AnimalAgePipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
