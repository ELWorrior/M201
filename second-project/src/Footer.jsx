export default function Footer({ etudiants }) {
    const total = etudiants.length
    const admis = etudiants.filter((e) => e.note >= 10).length
    const redoublants = total - admis
    const moyenne =
        total === 0
            ? 0
            : etudiants.reduce((somme, e) => somme + e.note, 0) / total

    const items = [
        { label: "Nombre d'admis", value: admis, color: "text-green-300" },
        { label: "Nombre de redoublants", value: redoublants, color: "text-red-300" },
        { label: "Moyenne générale", value: moyenne.toFixed(2) + " / 20", color: "text-yellow-300" },
    ]

    return (
        <footer className="bg-slate-800 p-4 text-white shadow-inner sm:p-6">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 text-center sm:grid-cols-3">
                {items.map((item) => (
                    <div key={item.label} className="rounded-lg bg-slate-700 px-4 py-3">
                        <p className="text-sm text-slate-300">{item.label}</p>
                        <p className={"text-2xl font-bold " + item.color}>{item.value}</p>
                    </div>
                    
                ))}

            </div>
        </footer>
    )
}