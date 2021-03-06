import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { CopywriteComponent} from './copywrite.component';
import { JokeModule } from './joke/joke.module';


@NgModule({
  declarations: [
    AppComponent,
    CopywriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JokeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
