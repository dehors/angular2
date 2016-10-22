import { Component } from '@angular/core';

@Component({
  selector: 'timer',
  template: `
        <h1>{{minutes}}:{{seconds}}</h1>
        <p>
            <button (click)="togglePaused()">
                {{ buttonLabel }}
            </button>
        </p>
        `
})

export class TimerComponent {
    minutes: number;
    seconds: number;
    isPaused: boolean;
    buttonLabel: string;

  constructor() {
    this.minutes = 24;
    this.seconds = 59;
    setInterval(() => this.tick(), 1000);
    this.resetTimer();
    this.buttonLabel = 'Empezar';
    this.togglePaused();
  }
  
  resetTimer(): void {
     this.minutes = 24;
     this.seconds = 59;
  }
  
  private tick(): void{
      if (!this.isPaused) {
          this.buttonLabel = 'Detener';
        if (--this.seconds < 0) {
            this.seconds = 59;
            if (--this.minutes < 0) {
                this.resetTimer();
            }
        }    
      }      
  }
  
  togglePaused(): void {
      this.isPaused = !this.isPaused;
      if (this.minutes < 24 || this.seconds < 59) {
          this.buttonLabel = this.isPaused ? 'Reanudar' : 'Detener';
      }
  }

}