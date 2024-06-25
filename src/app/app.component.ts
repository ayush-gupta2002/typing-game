import { Component, ViewChild } from '@angular/core';
import { loremIpsum } from 'lorem-ipsum';
import { ClockComponent } from './clock/clock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'typing-game';
  data = loremIpsum() + ' ' + loremIpsum();
  enteredData = '';
  message = '';
  isCorrect = false;
  minutes = 0;
  wordsPerMinute = 0;

  @ViewChild(ClockComponent) primaryComponent: ClockComponent;

  showWordsPerMinute(event: any) {
    this.minutes = event / 60;
    this.wordsPerMinute = this.data.split(' ').length / this.minutes;
    this.wordsPerMinute = Math.round(this.wordsPerMinute);
  }

  onChangeInput(event: Event) {
    this.enteredData = (event.target as HTMLInputElement).value;
    if (this.data === this.enteredData) {
      this.message = 'Congratulations! You made it';
      this.isCorrect = true;
      this.primaryComponent.stopClock();
    }
    if (this.enteredData.length === 1) {
      this.primaryComponent.startTimer();
    }
  }
  getClass(ch: string, enteredCh: string) {
    if (ch === enteredCh) {
      return 'text-green-500';
    }
    return 'text-red-500';
  }

  refresh(): void {
    window.location.reload();
  }
}
