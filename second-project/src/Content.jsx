import StudentCard from "./StudentCard.jsx";
import { useState } from "react";
import Student from "./Student.jsx";
export default function Content({ etudiants, setEtudiants }) {
    const [prochainId,setProchainId] = useState(6)     
    const [selectedId,setSelectedId] = useState(null)   
    const [nom,setNom] = useState("")
    const [note,setNote] = useState("")

    function vider(){
        setNom("")
        setNote("")
        setSelectedId(null)
    }

    function ajouter(){
        if(nom === "" || note === "") return

        if(selectedId !== null){
            // modification
            setEtudiants(etudiants.map((e)=>
                e.id === selectedId ? { ...e, nom: nom, note: Number(note) } : e
            ))
        } else {
        
            setEtudiants([...etudiants, { id: prochainId, nom: nom, note: Number(note) }])
            setProchainId(prochainId + 1)
        }
        vider()
    }

    function selectionner(student){
        setSelectedId(student.id)
        setNom(student.nom)
        setNote(student.note)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    function supprimer(idASupprimer){
        setEtudiants(etudiants.filter((e)=> e.id !== idASupprimer))
        if(selectedId === idASupprimer) vider()
    }

    const s = etudiants.map((student) => (
        <StudentCard
            key={student.id}
            student={student}
            onSelect={()=>selectionner(student)}
            onDelete={()=>supprimer(student.id)}
        />
    ));

    const inputClass =
        "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-800 placeholder-gray-400 " +
        "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"

    return (
        <main className="min-w-0 flex-1 bg-gray-50 p-4 sm:p-8">
            <Student/>

            <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Student List</h2>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    {etudiants.length} étudiants
                </span>
            </div>

            <form onSubmit={(e)=>e.preventDefault()}>
                <div className="mb-8 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                    <h3 className="mb-4 font-semibold text-gray-700">Ajouter / Modifier un étudiant</h3>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <input
                            type="text"
                            value={"ID : " + (selectedId !== null ? selectedId : prochainId)}
                            disabled
                            className={inputClass + " cursor-not-allowed bg-gray-100 font-semibold"}
                        />
                        <input
                            type="text"
                            placeholder="Nom"
                            value={nom}
                            onChange={(e)=>setNom(e.target.value)}
                            className={inputClass}
                        />
                        <input
                            type="number"
                            placeholder="Note"
                            value={note}
                            onChange={(e)=>setNote(e.target.value)}
                            className={inputClass}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={ajouter}
                        className="mt-4 w-full rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700 active:scale-95 sm:w-auto"
                    >
                        Ajouter
                    </button>
                </div>
            </form>

            {etudiants.length === 0 ? (
                <p className="rounded-xl border-2 border-dashed border-gray-300 p-10 text-center text-gray-500">
                    Aucun étudiant pour le moment.
                </p>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {s}
                </div>
            )}
        </main>
    );

}