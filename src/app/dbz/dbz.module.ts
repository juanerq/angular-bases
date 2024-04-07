import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharactersComponent } from './components/add-characters/add-characters.component';



@NgModule({
  declarations: [
    DbzMainPageComponent,
    ListComponent,
    AddCharactersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DbzMainPageComponent
  ]
})
export class DbzModule { }
