import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    CommonModule,
    FormsModule
  ],
  exports: [
    DbzMainPageComponent
  ]
})
export class DbzModule { }
