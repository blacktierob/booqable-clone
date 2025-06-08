// Inventory Item Types
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | '3XL' | 'Custom';

export type ItemCategory = 'Suit' | 'Tuxedo' | 'Vest' | 'Tie' | 'Bowtie' | 'Shirt' | 'Shoes' | 'Accessory';

export type ItemColor = 'Black' | 'Navy' | 'Grey' | 'Charcoal' | 'Burgundy' | 'White' | 'Ivory' | 'Blue' | 'Brown' | 'Custom';

export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  category: ItemCategory;
  color: ItemColor;
  size: Size;
  quantity: number;
  availableQuantity: number;
  pricePerDay: number;
  requiredDeposit: number;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Inventory Set - a collection of items that are typically rented together
export interface InventorySet {
  id: string;
  name: string;
  description: string;
  items: {
    itemId: string;
    quantity: number;
  }[];
  pricePerDay: number;
  requiredDeposit: number;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
} 