import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tamagotchi';
  hunger = 70;
  sleepiness = 70;
  life = 100;

    tamagotchi = {
    hunger: 0,
    sleep: 0,
  }

  eat() {
    this.hunger += 5;
  }

  sleep() {
    this.sleepiness += 5;
  }

  start() {
    this.hunger = 100;
    this.sleepiness = 100;
    this.life = 100;
  }
  
  lifebar() {
    this.hunger -= 0.05;
    this.sleepiness -= 0.05;
    if (this.hunger <= 50 && this.sleepiness <= 50) {
      this.life -= 1;
    }
    if (this.hunger >= 50 && this.sleepiness >= 50) {
      this.life += 0.4;
    }
  }
}
