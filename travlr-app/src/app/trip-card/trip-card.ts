import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../trip-data';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrls: ['./trip-card.css']
})
export class TripCardComponent {
  @Input() trip!: Trip;
}