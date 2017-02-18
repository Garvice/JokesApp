import { NgModule,  } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { JokeRoutingModule } from './joke.routes'
import { JokeDetailComponent } from './joke-detail.component';
import { JokeListComponent } from './joke-list.component';

@NgModule({
  declarations: [
    JokeListComponent,
    JokeDetailComponent
  ],
  imports: [
    CommonModule,
    JokeRoutingModule
  ],
  providers: [],
})
export class JokeModule { }
