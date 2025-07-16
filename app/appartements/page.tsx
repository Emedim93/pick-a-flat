// app/appartements/page.tsx
export default function AppartementsPage() {
  const logements = [
    {
      nom: "Studio Confort",
      description: "Parfait pour une escapade en duo. Wi-Fi, kitchenette, lit double.",
    },
    {
      nom: "Appartement Familial",
      description: "Idéal pour les familles avec enfants. 2 chambres, salon, cuisine équipée.",
    },
    {
      nom: "Suite Prestige",
      description: "Luxueuse suite avec vue panoramique, 2 chambres, salon, terrasse.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-black-800 mb-8">Nos Appartements</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {logements.map((logement, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-red-700 mb-2">{logement.nom}</h2>
            <p className="text-gray-600">{logement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
