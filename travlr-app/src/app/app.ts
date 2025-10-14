import { Component } from '@angular/core';
import { TripListComponent } from './trip-list/trip-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TripListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}