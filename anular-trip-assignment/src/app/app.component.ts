import { Component } from '@angular/core';
import { Trip } from './model/trip.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anular-trip-assignment';
  startPoint = '';
  endPoint = '';
  trips: Array<Trip> = [];

  addTrip() {
    const start = this.startPoint.trim();
    const end = this.endPoint.trim();
    if (!start || !end) return;

    const newTrip: Trip = {
      start,
      end,
      level: 1,
      hasArrow: false
    };

    const lastTrip = this.trips[this.trips.length - 1];

    if (lastTrip) {
      if (lastTrip.end === start) {
        newTrip.level = 1;
        newTrip.hasArrow = false;
      } else if (lastTrip.start === start && lastTrip.end === end) {
        newTrip.level = 2;
        newTrip.hasArrow = false;
      } else {
        newTrip.level = 1;
        newTrip.hasArrow = true;
      }
    }

    this.trips.push(newTrip);
    this.startPoint = '';
    this.endPoint = '';
  }

  clearTrip(){
    this.trips = [];
  }
}
