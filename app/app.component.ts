import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>{{gretting}}</h1>'
})

export class AppComponent {
   gretting: string;
  constructor() {
    this.gretting = 'My First Angular App!';
  }

}