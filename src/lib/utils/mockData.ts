import { 
  InventoryItem, 
  ItemCategory, 
  ItemColor, 
  Size, 
  InventorySet 
} from '../models/inventory';
import { Customer, Address, MeasurementProfile } from '../models/customer';
import { Booking, BookingStatus, GroupBooking, BookingItem } from '../models/booking';

// Mock Inventory Items
export const mockInventoryItems: InventoryItem[] = [
  {
    id: '1',
    name: 'Classic Black Suit',
    description: 'A timeless black suit suitable for any formal occasion',
    category: 'Suit',
    color: 'Black',
    size: 'M',
    quantity: 10,
    availableQuantity: 8,
    pricePerDay: 50,
    requiredDeposit: 100,
    imageUrl: '/images/black-suit.jpg',
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
  },
  {
    id: '2',
    name: 'Navy Tuxedo',
    description: 'An elegant navy blue tuxedo for special occasions',
    category: 'Tuxedo',
    color: 'Navy',
    size: 'L',
    quantity: 5,
    availableQuantity: 4,
    pricePerDay: 70,
    requiredDeposit: 150,
    imageUrl: '/images/navy-tuxedo.jpg',
    createdAt: new Date('2023-01-05'),
    updatedAt: new Date('2023-01-05'),
  },
  {
    id: '3',
    name: 'White Dress Shirt',
    description: 'A crisp white dress shirt for formal wear',
    category: 'Shirt',
    color: 'White',
    size: 'M',
    quantity: 20,
    availableQuantity: 15,
    pricePerDay: 15,
    requiredDeposit: 30,
    imageUrl: '/images/white-shirt.jpg',
    createdAt: new Date('2023-01-10'),
    updatedAt: new Date('2023-01-10'),
  },
];

// Mock Inventory Sets
export const mockInventorySets: InventorySet[] = [
  {
    id: '1',
    name: 'Complete Black Tie Package',
    description: 'Everything needed for a black tie event',
    items: [
      { itemId: '1', quantity: 1 },
      { itemId: '3', quantity: 1 },
    ],
    pricePerDay: 60,
    requiredDeposit: 120,
    imageUrl: '/images/black-tie-set.jpg',
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-01-15'),
  },
];

// Mock Customers
export const mockCustomers: Customer[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '555-123-4567',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      postalCode: '12345',
      country: 'USA',
    },
    measurementProfile: {
      height: 180,
      weight: 80,
      chest: 100,
      waist: 85,
      inseam: 82,
      neck: 40,
      shoulder: 45,
      sleeve: 65,
      shoeSize: 10,
      updatedAt: new Date('2023-01-20'),
    },
    createdAt: new Date('2023-01-20'),
    updatedAt: new Date('2023-01-20'),
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '555-987-6543',
    address: {
      street: '456 Oak Ave',
      city: 'Somewhere',
      state: 'NY',
      postalCode: '67890',
      country: 'USA',
    },
    createdAt: new Date('2023-01-25'),
    updatedAt: new Date('2023-01-25'),
  },
];

// Mock Bookings
export const mockBookings: Booking[] = [
  {
    id: '1',
    customerId: '1',
    customer: mockCustomers[0],
    startDate: new Date('2023-05-01'),
    endDate: new Date('2023-05-03'),
    status: 'Confirmed',
    items: [
      {
        id: '1',
        inventoryItemId: '1',
        inventoryItem: mockInventoryItems[0],
        quantity: 1,
        pricePerDay: 50,
      },
    ],
    subtotal: 100,
    tax: 10,
    total: 110,
    depositPaid: true,
    depositAmount: 100,
    createdAt: new Date('2023-04-15'),
    updatedAt: new Date('2023-04-15'),
    groupBookingId: '1',
  },
  {
    id: '2',
    customerId: '2',
    customer: mockCustomers[1],
    startDate: new Date('2023-05-01'),
    endDate: new Date('2023-05-03'),
    status: 'Confirmed',
    items: [
      {
        id: '2',
        inventoryItemId: '2',
        inventoryItem: mockInventoryItems[1],
        quantity: 1,
        pricePerDay: 70,
      },
    ],
    subtotal: 140,
    tax: 14,
    total: 154,
    depositPaid: true,
    depositAmount: 150,
    createdAt: new Date('2023-04-20'),
    updatedAt: new Date('2023-04-20'),
    groupBookingId: '1',
  },
];

// Mock Group Bookings
export const mockGroupBookings: GroupBooking[] = [
  {
    id: '1',
    name: 'Doe Wedding Party',
    primaryBookingId: '1',
    primaryBooking: mockBookings[0],
    eventDate: new Date('2023-05-02'),
    bookingIds: ['1', '2'],
    bookings: [mockBookings[0], mockBookings[1]],
    expectedSize: 5,
    notes: 'Wedding at Grand Hotel',
    createdAt: new Date('2023-04-15'),
    updatedAt: new Date('2023-04-20'),
  },
]; 