import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">Appart Hôtel</h1>
      <ul className="flex gap-6 text-gray-600">
        <Button variant="ghost">Accueil</Button>
        <Button variant="ghost">Réservations</Button>
        <Button variant="ghost">Contact</Button>
      </ul>
    </nav>
  );
};

export default Navbar;