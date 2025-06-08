import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl font-bold mb-6 text-center">Suit Rental Management System</h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          Manage your wedding suit rentals, customers, and group bookings in one place.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <DashboardCard 
            title="Inventory" 
            description="Manage your suit inventory, styles, and availability"
            href="/inventory"
            icon="📦"
          />
          <DashboardCard 
            title="Customers" 
            description="Create and manage customer records and details"
            href="/customers"
            icon="👥"
          />
          <DashboardCard 
            title="Bookings" 
            description="Create and manage individual and group bookings"
            href="/bookings"
            icon="📅"
          />
        </div>
      </div>
    </main>
  );
}

function DashboardCard({ title, description, href, icon }: { 
  title: string; 
  description: string; 
  href: string;
  icon: string;
}) {
  return (
    <Link href={href} className="block">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
        <div className="text-4xl mb-4">{icon}</div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
} 