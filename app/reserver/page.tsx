"use client";
export default function AdminPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Espace Administrateur</h1>
      <p className="text-gray-700 mb-4">Bienvenue dans le tableau de bord de gestion.</p>
      <ul className="list-disc list-inside text-gray-600">
        <li>Visualiser les réservations (à venir)</li>
        <li>Ajouter / Modifier les appartements</li>
        <li>Gérer les disponibilités</li>
      </ul>
    </div>
  );
}