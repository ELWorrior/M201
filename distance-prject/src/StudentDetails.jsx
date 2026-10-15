import { useParams, Link } from 'react-router-dom'

export default function StudentDetails({ students }) {
  const { id } = useParams()

  const student = students.find(s => s.id === Number(id))

  if (!student) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-red-600">Étudiant introuvable</h2>
        <Link to="/etudiants" className="text-blue-600 underline">Retour à la liste</Link>
      </div>
    )
  }

  return (
    <div className="max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Détails de l'étudiant {student.id}</h2>

      <div className="border border-gray-300 rounded-lg shadow-md p-6">
        <p><span className="font-bold">Nom :</span> {student.lastName}</p>
        <p><span className="font-bold">Prénom :</span> {student.firstName}</p>
        <p className={student.grade >= 10 ? 'text-green-600' : 'text-red-600'}>
          <span className="font-bold">Note :</span> {student.grade}/20
        </p>
      </div>

      <Link to="/etudiants" className="inline-block mt-4 text-blue-600 underline">
        Retour à la liste
      </Link>
    </div>
  )
}