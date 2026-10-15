export default function StudentCard({student, onSelect, onDelete}) {
    const reussi = student.note >= 10
    return (
        <div
            onClick={onSelect}
            className={
                "cursor-pointer rounded-xl border-l-8 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg " +
                (reussi ? "border-green-500" : "border-red-500")
            }
        >
            <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        ID #{student.id}
                    </span>
                    <h3 className="truncate text-xl font-bold text-gray-800">{student.nom}</h3>
                </div>
                <span
                    className={
                        "shrink-0 rounded-full px-3 py-1 text-sm font-semibold " +
                        (reussi ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700")
                    }
                >
                    {reussi ? "admis" : "redoublant"}
                </span>
            </div>

            <p className="mt-3 text-gray-600">
                Note: <span className="font-bold text-gray-800">{student.note}</span> / 20
            </p>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                    className={"h-full rounded-full " + (reussi ? "bg-green-500" : "bg-red-500")}
                    style={{ width: Math.min(student.note * 5, 100) + "%" }}
                />
            </div>

            <button
                onClick={(e)=>{ e.stopPropagation(); onDelete() }}
                className="mt-4 w-full rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
            >
                Supprimer
            </button>
        </div>
    );
}