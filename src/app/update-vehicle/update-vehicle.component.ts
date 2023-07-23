import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { VehicleDTO } from '../vehicleDTO';
import { Vehicle } from '../vehicle';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-vehicle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.scss']
})
export class UpdateVehicleComponent {
  vehicleId!: number;
  vehicleDTO: VehicleDTO = {
    brand: '',
    model: '',
    category: '',
    vehicleType: '',
    stateNumber: '',
    yearOfManufacture: 0,
    hasTrailer: false
  };

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private routerForNavigation: Router
  ) {}

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.getVehicle(id);
    this.route.params.subscribe(params => {
      this.vehicleId = params['id'];
      this.getVehicle(this.vehicleId);
    });
  }

  getVehicle(id: number): void {
    this.vehicleService.getVehicleById(id).subscribe(vehicle => {
      this.vehicleDTO = {
        brand: vehicle.brand,
        model: vehicle.model,
        category: vehicle.category,
        stateNumber: vehicle.stateNumber,
        vehicleType: vehicle.vehicleType,
        yearOfManufacture: vehicle.yearOfManufacture,
        hasTrailer: vehicle.hasTrailer
      };
    });
  }

  onSubmit(): void {
    this.vehicleService.updateVehicle(this.vehicleId, this.vehicleDTO).subscribe(updatedVehicle => {
      console.log('Vehicle updated successfully:', updatedVehicle);
      this.routerForNavigation.navigateByUrl("/");
    });
  }
  
  close(): void {
    this.routerForNavigation.navigateByUrl("/");
  }
}
