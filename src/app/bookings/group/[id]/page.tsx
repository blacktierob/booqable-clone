'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { mockGroupBookings, mockBookings } from '@/lib/utils/mockData';

export default function GroupBookingDetails() {
  const params = useParams();
  const groupId = params.id as string;
  
  // Find the current group from mock data
  const group = mockGroupBookings.find(g => g.id === groupId);
  
  // Get all bookings associated with this group
  const groupBookings = mockBookings.filter(b => b.groupBookingId === groupId);
  
  if (!group) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-medium text-red-600 mb-2">Group Not Found</h2>
          <p className="mb-4">The group booking you are looking for does not exist.</p>
          <Link href="/bookings" className="text-primary-600 hover:underline">
            Return to Bookings
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{group.name}</h1>
        <Link href="/bookings" className="text-gray-600 hover:text-gray-900">
          Back to Bookings
        </Link>
      </div>
      
      {/* Status Overview */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-sm text-gray-500">Event Date</div>
            <div>{new Date(group.eventDate).toLocaleDateString()}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Primary Customer</div>
            <div>{group.primaryBooking?.customer?.firstName} {group.primaryBooking?.customer?.lastName}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Members</div>
            <div>{groupBookings.length} / {group.expectedSize}</div>
          </div>
          <div>
            <Link 
              href={`/bookings/group/${groupId}/add-member`}
              className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600"
            >
              Add Member
            </Link>
          </div>
        </div>
        
        {/* Members List */}
        <h2 className="text-lg font-semibold mb-2">Group Members</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Member
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Measurements
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {groupBookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {booking.id === group.primaryBookingId && (
                        <span className="mr-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          Primary
                        </span>
                      )}
                      <div>
                        <div className="font-medium">
                          {booking.customer?.firstName} {booking.customer?.lastName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {booking.customer?.phone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.customer?.measurementProfile ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Complete
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Incomplete
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
              
              {/* Missing Members */}
              {Array.from({ length: Math.max(0, group.expectedSize - groupBookings.length) }).map((_, index) => (
                <tr key={`empty-${index}`} className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 italic">
                    Member not yet added
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">-</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 