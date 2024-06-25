import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css',
})
export class ClockComponent {
  @Output() onTimerStop = new EventEmitter<any>();
  num1 = 0;
  intervalId = setInterval(() => {}, 1000);
  constructor() {}

  ngOnInit(): void {
    clearInterval(this.intervalId);
  }

  startTimer(): void {
    this.numIncrement(this.num1);
    this.intervalId = setInterval(() => this.numIncrement(this.num1), 1000);
  }

  numIncrement(numReceived: Number) {
    this.num1++;
  }

  stopClock() {
    clearInterval(this.intervalId);
    this.onTimerStop.emit(this.num1);
  }
}
