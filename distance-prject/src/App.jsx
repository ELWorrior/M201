import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'
import Accueil from './Accueil.jsx'
import Etudiants from './Etudiants.jsx'
import StudentDetails from './StudentDetails.jsx'
import Notes from './Notes.jsx'
import NotFound from './NotFound.jsx'

const initialStudents = [
  { id: 1, lastName: "Benali", firstName: "Karim", grade: 8 },
  { id: 2, lastName: "Alaoui", firstName: "Sara", grade: 15 },
  { id: 3, lastName: "Tazi", firstName: "Youssef", grade: 12 }
]

export default function App() {
  const [students, setStudents] = useState(initialStudents)

  function handleAdd(newStudent) {
    setStudents([...students, newStudent])
  }

  function handleDelete(id) {
    setStudents(students.filter(s => s.id !== id))
  }

  function handleUpdate(id, updatedData) {
    setStudents(students.map(s => s.id === id ? { ...s, ...updatedData } : s))
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Accueil />} />

            <Route
              path="/etudiants"
              element={
                <Etudiants
                  students={students}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              }
            />

            <Route path="/etudiants/:id" element={<StudentDetails students={students} />} />

            <Route path="/notes" element={<Notes students={students} />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>

      <Footer students={students} />
    </div>
  )
}