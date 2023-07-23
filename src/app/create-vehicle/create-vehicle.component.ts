import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../vehicle.service';
import { VehicleDTO } from '../vehicleDTO';

@Component({
  selector: 'app-create-vehicle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent {
  vehicleDTO: VehicleDTO = {
    brand: '',
    model: '',
    category: '',
    stateNumber: '',
    vehicleType: '',
    yearOfManufacture: 0,
    hasTrailer: false
  };

  constructor(
    private vehicleService: VehicleService
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.vehicleService.addVehicle(this.vehicleDTO).subscribe(createdVehicle => {
      console.log('Vehicle created successfully:', createdVehicle);
    });
  }
}
