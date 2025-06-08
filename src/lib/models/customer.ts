// Customer Types
export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  measurementProfile?: MeasurementProfile;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

// Measurements for fit
export interface MeasurementProfile {
  height: number; // in cm
  weight?: number; // in kg
  chest?: number; // in cm
  waist?: number; // in cm
  inseam?: number; // in cm
  neck?: number; // in cm
  shoulder?: number; // in cm
  sleeve?: number; // in cm
  shoeSize?: number;
  notes?: string;
  updatedAt: Date;
} 