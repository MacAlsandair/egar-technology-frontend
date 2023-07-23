import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';

const routes: Routes = [
  {path: '', redirectTo: 'vehicle-list', pathMatch: 'full'},
  {path: 'vehicle-list', component: VehicleListComponent},
  {path: 'update-vehicle/:id', component: UpdateVehicleComponent},
  {path: '**', redirectTo: 'vehicle-list'},
  {path: 'create-vehicle', component: CreateVehicleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
