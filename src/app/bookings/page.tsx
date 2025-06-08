import { mockBookings, mockGroupBookings } from '@/lib/utils/mockData';

export default function BookingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Booking Management</h1>
      
      {/* Group Bookings Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Wedding Groups</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Group Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Primary Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Members
                </th>
              </tr>
            </thead>
            <tbody>
              {mockGroupBookings.map((group) => (
                <tr key={group.id} className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {group.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {group.primaryBooking?.customer?.firstName} {group.primaryBooking?.customer?.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(group.eventDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {group.bookingIds.length} / {group.expectedSize}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Individual Bookings Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">All Bookings</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Group
                </th>
              </tr>
            </thead>
            <tbody>
              {mockBookings.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.customer?.firstName} {booking.customer?.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.groupBookingId ? booking.groupBooking?.name : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 