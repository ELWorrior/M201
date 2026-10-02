export default function StudentCard({student, onSelect, onDelete}) {
    return (
        <div
            onClick={onSelect}
            className={(student.note >=10 ? "bg-green-600 p-4 rounded shadow" : "bg-red-600 p-4 rounded shadow") + " cursor-pointer"}
        >
            <h3 className="text-xl font-bold">{student.nom}</h3>
            <p>Note: {student.note}</p>
            <button
                onClick={(e)=>{ e.stopPropagation(); onDelete() }}
                className="mt-2 bg-black text-white px-3 py-1 rounded"
            >
                Supprimer
            </button>
        </div>
    );
}