import { useVanStore } from "../store/VanStore";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import type { Van } from "../type/Types";

export default function VanRentalCard() {
  const { vans } = useVanStore();
  const { id } = useParams<{ id: string }>();

  const [selectVan, setSelectVan] = useState<Van | null>(null);

  useEffect(() => {
    if (id) {
      const foundVan = vans.find((item) => item.id === Number(id));
      if (foundVan) {
        setSelectVan(foundVan);
      }
    }
  }, [id, vans]);

  return (
      <div className="">
          {selectVan ? <div className="min-h-screen bg-orange-50 p-6">
      <div className="max-w-md mx-auto">
        <Link to="/vans" className="flex items-center gap-2 text-gray-700 mb-8 hover:text-gray-900">
          <ArrowLeft size={20} />
          <span className="underline font-medium">Back to all vans</span>
        </Link>

        <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
          <img
            src={selectVan.imgUrl}
            alt={selectVan.name}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="mb-4">
          <span className="inline-block bg-orange-500 text-white px-6 py-2 rounded font-medium">
            {selectVan.type}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {selectVan.name}
        </h1>

        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-3xl font-bold text-gray-900">
            ${selectVan.price}
          </span>
          <span className="text-xl text-gray-600">/day</span>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          {selectVan.dec}
        </p>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors">
          Rent this van
        </button>
      </div>
          </div>
      : <div className="">
        <h2 className="text-center">Xech Qanday Van Topilmaydi</h2>
      </div>    
      }
    </div>
  );
}
