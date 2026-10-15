import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800">404</h2>
      <p className="text-gray-600 mt-2">Cette page n'existe pas.</p>
      <Link to="/" className="inline-block mt-4 text-blue-600 underline">Retour à l'accueil</Link>
    </div>
  )
}