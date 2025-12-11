import  { useState } from 'react';
import { vans } from '../data/data.ts'
import type { Van } from '../type/Types.ts';
export default function Vans(){
  const [filterVan , setFilterVan] = useState<Van[]>(vans);
  const handleFilter  = (type: 'Simple' | 'Rugged' | 'Luxury') : void =>{
    setFilterVan(vans.filter((van) => van.type === type))
  }
  return (
  <div className="min-h-screen p-4 sm:p-6">
    <div className="max-w-4xl mx-auto">

      <div className="flex items-start justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Explore our van options
        </h1>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
        <button onClick={() => handleFilter("Simple")} className="px-4 sm:px-5 py-2 rounded-md text-sm sm:text-base font-medium transition-all bg-orange-100 text-gray-700 hover:bg-orange-200">
          Simple
        </button>
        <button onClick={() => handleFilter("Luxury")} className="px-4 sm:px-5 py-2 rounded-md text-sm sm:text-base font-medium transition-all bg-orange-100 text-gray-700 hover:bg-orange-200">
          Luxury
        </button>
        <button onClick={() => handleFilter("Rugged")} className="px-4 sm:px-5 py-2 rounded-md text-sm sm:text-base font-medium transition-all bg-orange-100 text-gray-700 hover:bg-orange-200">
          Rugged
        </button>
        <button onClick={() => setFilterVan(vans)} className="px-4 sm:px-5 py-2 rounded-md text-sm sm:text-base font-medium underline text-gray-700 hover:text-gray-900">
          Clear filters
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {filterVan.map(pro => {
          return <div key={pro.id} className={`bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer`}>
            <div className="relative h-44 sm:h-52">
              <img
                src={pro.imgUrl}
                alt="Van"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{pro.name}</h3>
                <div className="text-right">
                  <p className="text-lg sm:text-xl font-bold text-gray-900">${pro.price}</p>
                  <p className="text-xs sm:text-sm text-gray-500">/day</p>
                </div>
              </div>
              <span className={`inline-block bg-orange-500 text-white px-3 py-1.5 rounded text-xs sm:text-sm font-semibold ${pro.type}`}>
                {pro.type}
              </span>
            </div>
          </div>
        })}   

      </div>

      <div className="text-center py-16 text-gray-500 hidden">
        <p className="text-lg">No vans found matching your filters.</p>
      </div>

    </div>
  </div>
);
}

