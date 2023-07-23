import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VehicleDTO } from '../vehicleDTO';
import { VehicleSearchCriteria } from '../vehicleSearchCriteria';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  vehicles!: Vehicle[];

  brandFilter: string | null = null;
  modelFilter: string | null = null;
  category: string | null = null;
  stateNumber: string | null = null;
  vehicleType: string | null = null;
  yearOfManufacture: number | null = null;
  hasTrailer: boolean | null = null;

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicleService.getAllVehicles().subscribe(
      vehicles => this.vehicles = vehicles
    );
  }

  create(): void {
    this.router.navigateByUrl("/create-vehicle");
  }

  updateVehicle(id: number): void {
    this.router.navigateByUrl(`/update-vehicle/${id}`);
  }
  performSearch(): void {
    const searchCriteria: VehicleSearchCriteria = {
      brand: this.brandFilter,
      model: this.modelFilter,
      category: this.category,
      stateNumber: this.stateNumber,
      vehicleType: this.vehicleType,
      yearOfManufacture: this.yearOfManufacture,
      hasTrailer: this.hasTrailer
    };
  
    this.vehicleService.searchVehicles(searchCriteria).subscribe(
      vehicles => {
        this.vehicles = vehicles;
      }
    );
  }
}
