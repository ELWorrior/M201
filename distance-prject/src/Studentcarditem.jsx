import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function StudentCardItem({ student, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [lastName, setLastName] = useState(student.lastName)
  const [firstName, setFirstName] = useState(student.firstName)
  const [grade, setGrade] = useState(student.grade)

  function handleSave() {
    onUpdate(student.id, { lastName, firstName, grade: Number(grade) })
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div className="border border-gray-200 shadow-md rounded-lg p-4 flex flex-col gap-2">
        <input className="border-2 border-gray-300 rounded-lg p-1"
          value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input className="border-2 border-gray-300 rounded-lg p-1"
          value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input className="border-2 border-gray-300 rounded-lg p-1" type="number"
          value={grade} onChange={(e) => setGrade(e.target.value)} />
        <div className="flex gap-2 mt-2">
          <button className="bg-indigo-600 text-white rounded-lg px-3 py-1 flex-1" onClick={handleSave}>
            Enregistrer
          </button>
          <button className="bg-gray-300 rounded-lg px-3 py-1 flex-1" onClick={() => setIsEditing(false)}>
            Annuler
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="border border-gray-200 shadow-md rounded-lg p-4">
      <h3 className="bg-indigo-100 text-indigo-700 text-center rounded-lg mb-2">ID {student.id}</h3>
      <h3 className="font-bold">{student.lastName}</h3>
      <h3 className="font-bold">{student.firstName}</h3>
      <h3 className={`text-center rounded-lg mt-2 ${student.grade >= 10 ? 'bg-green-100' : 'bg-red-100'}`}>
        {student.grade}/20
      </h3>

      <div className="flex gap-2 mt-3">
        <button className="bg-indigo-600 text-white rounded-lg px-3 py-1 flex-1" onClick={() => setIsEditing(true)}>
          Modifier
        </button>
        <button className="bg-red-600 text-white rounded-lg px-3 py-1 flex-1" onClick={() => onDelete(student.id)}>
          Supprimer
        </button>
      </div>

      <Link to={'/etudiants/' + student.id} className="block text-center text-blue-600 underline mt-3">
        Détails
      </Link>
    </div>
  )
}