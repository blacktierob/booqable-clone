'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Inventory', href: '/inventory' },
    { label: 'Customers', href: '/customers' },
    { label: 'Bookings', href: '/bookings' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-primary-600">
                Suit Rental
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex items-center px-4 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-primary-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="ml-3 relative">
              <Link 
                href="/customers/new" 
                className="mr-2 bg-white hover:bg-gray-50 text-primary-600 border border-primary-500 px-4 py-2 rounded-md text-sm font-medium"
              >
                New Customer
              </Link>
              <Link 
                href="/bookings/new-group" 
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                New Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 