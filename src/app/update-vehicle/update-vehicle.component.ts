import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { VehicleDTO } from '../vehicleDTO';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-update-vehicle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.scss']
})
export class UpdateVehicleComponent {
  vehicle: Vehicle = {
    id: 0,
    brand: '',
    model: '',
    category: '',
    stateNumber: '',
    yearOfManufacture: 0,
    hasTrailer: false,
    vehicleType: ''
  };

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    const vehicleId = 1; 
    this.vehicleService.getVehicleById(vehicleId).subscribe((data: Vehicle) => {
      this.vehicle = data;
    });
  }

  onSubmit() {
    this.vehicleService.updateVehicle(this.vehicle.id, this.vehicle).subscribe((data: Vehicle) => {
      console.log('Vehicle updated successfully:', data);
    });
  }
}
