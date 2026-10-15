import Studentform from './Studentform.jsx'
import Studentcard from './Studentcard.jsx'

export default function Etudiants({ students, onAdd, onDelete, onUpdate }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800">Liste des étudiants inscrits</h2>
      <Studentform onAdd={onAdd} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mt-8">
        <Studentcard students={students} onDelete={onDelete} onUpdate={onUpdate} />
      </div>
    </div>
  )
}