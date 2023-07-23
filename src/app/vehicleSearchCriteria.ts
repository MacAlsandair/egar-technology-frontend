export interface VehicleSearchCriteria {
  brand: string | null;
  model: string | null;
  category: string | null;
  stateNumber: string | null;
  vehicleType: string | null;
  yearOfManufacture: number | null;
  hasTrailer: boolean | null;
}
