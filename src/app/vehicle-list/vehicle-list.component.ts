import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  vehicles!: Vehicle[];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicleService.getAllVehicles().subscribe(
      vehicles => this.vehicles = vehicles
    );
  }
}
