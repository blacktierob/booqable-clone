import { Customer } from './customer';
import { InventoryItem, InventorySet } from './inventory';

// Booking Status
export type BookingStatus = 
  | 'Draft' 
  | 'Confirmed' 
  | 'Picked Up' 
  | 'Returned' 
  | 'Completed' 
  | 'Cancelled' 
  | 'Late';

// Individual Booking Item
export interface BookingItem {
  id: string;
  inventoryItemId: string;
  inventoryItem?: InventoryItem;
  inventorySetId?: string;
  inventorySet?: InventorySet;
  quantity: number;
  pricePerDay: number;
  adjustedPrice?: number;
  notes?: string;
}

// Base Booking (can be individual or part of a group)
export interface Booking {
  id: string;
  customerId: string;
  customer?: Customer;
  startDate: Date;
  endDate: Date;
  status: BookingStatus;
  items: BookingItem[];
  subtotal: number;
  discount?: number;
  tax: number;
  total: number;
  depositPaid: boolean;
  depositAmount: number;
  depositRefunded?: boolean;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  // Group booking related fields
  groupBookingId?: string;
  groupBooking?: GroupBooking;
}

// Group Booking (e.g., for a wedding party)
export interface GroupBooking {
  id: string;
  name: string; // e.g., "Smith Wedding Party"
  primaryBookingId: string; // The primary customer's booking (typically the groom)
  primaryBooking?: Booking;
  eventDate: Date; // The wedding date
  bookingIds: string[]; // IDs of all bookings in this group
  bookings?: Booking[]; // All bookings in this group
  expectedSize: number; // Expected number of people in the group
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
} 