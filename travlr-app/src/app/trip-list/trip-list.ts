import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card';
import { TripDataService, Trip } from '../trip-data';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-list.html',
  styleUrls: ['./trip-list.css']
})
export class TripListComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private tripService: TripDataService) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe({
      next: (data: Trip[]) => (this.trips = data),
      error: (err: any) => console.error('Error fetching trips:', err)
    });
  }
}