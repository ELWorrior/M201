import { useState } from "react";
import Counter from "./Counter.jsx";
import GestionEtudiants from "./gestionEtudiants.jsx";
export default function App() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [type, setType] = useState("+");
    const [resultat, setResultat] = useState("");

    function calculer() {
        const x = Number(a);
        const y = Number(b);

        if (type === "+") {
            setResultat(x + y);
        } else if (type === "-") {
            setResultat(x - y);
        } else if (type === "*") {
            setResultat(x * y);
        } else if (type === "/") {
            if (y === 0) {
                setResultat("Impossible de diviser par 0");
            } else {
                setResultat(x / y);
            }
        }
    }

    return (
      
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 p-4">
          
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md">
                <h1 className="mb-4 text-center text-2xl font-bold">Calculatrice</h1>

                <input
                    type="number"
                    placeholder="Nombre 1"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                    className="mb-3 w-full rounded border border-gray-300 px-3 py-2"
                />

                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="mb-3 w-full rounded border border-gray-300 px-3 py-2"
                >
                    <option value="+"> (+)</option>
                    <option value="-"> (-)</option>
                    <option value="*"> (×)</option>
                    <option value="/">(÷)</option>
                </select>

                <input
                    type="number"
                    placeholder="Nombre 2"
                    value={b}
                    onChange={(e) => setB(e.target.value)}
                    className="mb-3 w-full rounded border border-gray-300 px-3 py-2"
                />

                <button
                    onClick={calculer}
                    className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    Calculer
                </button>

                {resultat !== "" && (
                    <p className="mt-4 text-center text-xl font-bold">
                        Résultat : {resultat}
                    </p>
                )}
            </div>

            <Counter />
        </div>
    );
}