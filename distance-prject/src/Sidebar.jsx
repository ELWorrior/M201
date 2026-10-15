import { NavLink } from 'react-router-dom'

function linkClass({ isActive }) {
  return isActive
    ? 'text-indigo-300 font-bold'
    : 'text-white font-medium hover:text-indigo-300 transition-colors'
}

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-800 text-white p-6 flex flex-col gap-4">
      <h3 className="font-extrabold text-gray-400 uppercase text-xs tracking-wider border-b border-gray-700 pb-2">Menu</h3>

      <NavLink to="/" end className={linkClass}>Accueil</NavLink>
      <NavLink to="/etudiants" className={linkClass}>Étudiants</NavLink>
      <NavLink to="/notes" className={linkClass}>Notes</NavLink>
    </div>
  )
}