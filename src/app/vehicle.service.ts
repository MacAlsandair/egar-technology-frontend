import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';
import { VehicleDTO } from './vehicleDTO';
import { VehicleSearchCriteria } from './vehicleSearchCriteria';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  private baseUrl = 'http://localhost:8080/api/v1/vehicles'; // replace with your server url

  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}`);
  }

  getVehicleById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.baseUrl}/${id}`);
  }

  addVehicle(vehicleDTO: VehicleDTO): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.baseUrl, vehicleDTO);
  }

  updateVehicle(id: number, vehicleDTO: VehicleDTO): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${this.baseUrl}/${id}`, vehicleDTO);
  }

  searchVehicles(vehicleSearchCriteria: VehicleSearchCriteria): Observable<Vehicle[]> {
    return this.http.post<Vehicle[]>(`${this.baseUrl}/search`, vehicleSearchCriteria);
  }
}
