import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InterestComponent } from './interest/interest.component';
import { InterestService } from 'app/interest/interest.service';

@NgModule({
  declarations: [
    AppComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [InterestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
