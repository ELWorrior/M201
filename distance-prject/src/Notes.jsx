export default function Notes({ students }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Notes</h2>

      <table className="w-full max-w-2xl border border-gray-400 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">Nom</th>
            <th className="border border-gray-400 p-2">Prénom</th>
            <th className="border border-gray-400 p-2">Note</th>
            <th className="border border-gray-400 p-2">Résultat</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td className="border border-gray-400 p-2">{s.lastName}</td>
              <td className="border border-gray-400 p-2">{s.firstName}</td>
              <td className="border border-gray-400 p-2">{s.grade}/20</td>
              <td className="border border-gray-400 p-2">{s.grade >= 10 ? 'Admis' : 'Redoublant'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}