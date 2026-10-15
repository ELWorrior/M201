export default function Sidebar(){
    return (
      <aside className="w-full bg-slate-700 p-4 text-white md:min-h-screen md:w-56 md:p-5">
        <h2 className="mb-3 font-bold md:mb-5">
          Menu
        </h2>

        <ul className="flex gap-2 md:block md:space-y-2">
          <li className="cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-600">Accueil</li>
          <li className="cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-600">Étudiants</li>
          <li className="cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-600">Notes</li>
        </ul>
      </aside>
    )
}