import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TimerComponent }   from './app.componentTimer';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,TimerComponent ],
  bootstrap:    [ AppComponent,TimerComponent ]
})
export class AppModule { }
