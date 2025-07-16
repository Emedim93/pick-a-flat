import "../styles/globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold text-blue-700">Appart Hôtel</h1>
            <nav className="space-x-4">
              <Link href="/" className="text-blue-600 hover:underline">Accueil</Link>
              <Link href="/reserver" className="text-blue-600 hover:underline">Réserver</Link>
              <Link href="/appartements" className="text-blue-600 hover:underline">Appartements</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-white mt-12 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Appart Hôtel. Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}