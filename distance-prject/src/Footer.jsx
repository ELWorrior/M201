const NOTE_MIN = 10

export default function Footer({ students }) {
  const admis = students.filter(s => s.grade >= NOTE_MIN)
  const redoublants = students.filter(s => s.grade < NOTE_MIN)

  const total = students.reduce((somme, s) => somme + s.grade, 0)
  const moyenne = students.length > 0 ? (total / students.length).toFixed(2) : '0.00'

  return (
    <footer className="mt-10 bg-slate-800 text-white p-6 flex flex-col sm:flex-row justify-around text-center gap-4">
      <div>
        <p className="text-sm text-gray-400 uppercase">Nombre d'admis</p>
        <p className="text-xl font-bold">{admis.length}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400 uppercase">Nombre de redoublants</p>
        <p className="text-xl font-bold">{redoublants.length}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400 uppercase">Moyenne générale</p>
        <p className="text-xl font-bold">{moyenne}/20</p>
      </div>
    </footer>
  )
}