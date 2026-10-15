import { useState } from 'react'

export default function Studentform({ onAdd }) {
  const [id, setId] = useState("")
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [grade, setGrade] = useState("")

  function handleAdd() {
    if (id === "" || !lastName.trim() || !firstName.trim() || grade === "") {
      alert("Merci de remplir tous les champs.")
      return
    }

    onAdd({
      id: Number(id),
      lastName: lastName,
      firstName: firstName,
      grade: Number(grade)
    })

    setId("")
    setLastName("")
    setFirstName("")
    setGrade("")
  }

  return (
    <form className="flex flex-col border border-gray-300 rounded-lg shadow-md m-6 p-6 max-w-md mx-auto">
      <label htmlFor="id">ID :</label>
      <input className="border-2 border-gray-300 m-4 rounded-lg p-1" type="number" id="id"
        value={id} onChange={(e) => setId(e.target.value)} />

      <label htmlFor="lastName">Nom :</label>
      <input className="border-2 border-gray-300 m-4 rounded-lg p-1" type="text" id="lastName"
        value={lastName} onChange={(e) => setLastName(e.target.value)} />

      <label htmlFor="firstName">Prénom :</label>
      <input className="border-2 border-gray-300 m-4 rounded-lg p-1" type="text" id="firstName"
        value={firstName} onChange={(e) => setFirstName(e.target.value)} />

      <label htmlFor="grade">Note :</label>
      <input className="border-2 border-gray-300 m-4 rounded-lg p-1" type="number" id="grade"
        value={grade} onChange={(e) => setGrade(e.target.value)} />

      <button type="button" className="text-white bg-teal-600 mt-4 rounded-lg py-3" onClick={handleAdd}>
        Ajouter
      </button>
    </form>
  )
}