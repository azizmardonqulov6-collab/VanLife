import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VanRentalCard() {
  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <div className="max-w-md mx-auto">
        <Link to="/vans" className="flex items-center gap-2 text-gray-700 mb-8 hover:text-gray-900">
          <ArrowLeft size={20} />
          <span className="underline font-medium">Back to all vans</span>
        </Link>

        <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
          <img 
            src="https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80"
            alt="Volkswagen Van"
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="mb-4">
          <span className="inline-block bg-orange-500 text-white px-6 py-2 rounded font-medium">
            Simple
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Modest Explorer
        </h1>

        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-3xl font-bold text-gray-900">$60</span>
          <span className="text-xl text-gray-600">/day</span>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!
        </p>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors">
          Rent this van
        </button>
      </div>
    </div>
  );
}