"use client";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  const today = new Date();
  const [state, setState] = useState([
    {
      startDate: today,
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const [bookedDates, setBookedDates] = useState<{ startDate: Date; endDate: Date }[]>([]);
  const [message, setMessage] = useState("");

  const handleBooking = () => {
    const { startDate, endDate } = state[0];
    if (!startDate || !endDate || isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      setMessage("Veuillez sélectionner des dates valides.");
      return;
    }
    setBookedDates([...bookedDates, { startDate, endDate }]);
    setMessage("Réservation effectuée avec succès ✅");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-white p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-4 text-red-900">Réservez votre appart hôtel</h1>
        <p className="text-gray-600 mb-6">
          Sélectionnez vos dates de séjour dans le calendrier ci-dessous
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => {
                if (
                  item?.selection?.startDate instanceof Date &&
                  item?.selection?.endDate instanceof Date &&
                  !isNaN(item.selection.startDate.getTime()) &&
                  !isNaN(item.selection.endDate.getTime())
                ) {
                  setState([
                    {
                      startDate: new Date(item.selection.startDate),
                      endDate: new Date(item.selection.endDate),
                      key: "selection",
                    },
                  ]);
                }
              }}
              moveRangeOnFirstSelection={false}
              ranges={state}
              className="rounded-xl shadow"
            />
            <div className="mt-6">
              <Button onClick={handleBooking} className="bg-blue-600 hover:bg-blue-700 text-white">
                Réserver
              </Button>
              {message && <p className="mt-4 text-green-600 font-semibold">{message}</p>}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl font-semibold text-grey-800 mb-4">Nos appartements disponibles</h2>
            <ul className="space-y-4">
              <li className="p-4 bg-white shadow rounded-lg">
                <h3 className="text-lg font-bold text-green-700">Studio Confort</h3>
                <p className="text-gray-500">Idéal pour 2 personnes, kitchenette, Wi-Fi gratuit</p>
              </li>
              <li className="p-4 bg-white shadow rounded-lg">
                <h3 className="text-lg font-bold text-green-700">Appartement Familial</h3>
                <p className="text-gray-500">4 couchages, coin salon, proche des transports</p>
              </li>
              <li className="p-4 bg-white shadow rounded-lg">
                <h3 className="text-lg font-bold text-green-700">Suite Prestige</h3>
                <p className="text-gray-500">Vue panoramique, services premium, 2 chambres</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
