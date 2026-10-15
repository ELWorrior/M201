import { useState } from "react";

export default function Counter() {
    const [compteur, setCompteur] = useState(0);

    function augmenter() {
        setCompteur(compteur + 1);
    }

    function diminuer() {
        setCompteur(compteur - 1);
    }

    return (
        <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md">
            <h2 className="mb-4 text-center text-2xl font-bold">Compteur</h2>

            <p className="mb-4 text-center text-4xl font-bold">{compteur}</p>

            <div className="flex gap-3">
                <button
                    onClick={diminuer}
                    className="flex-1 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                    -1
                </button>
                <button
                    onClick={augmenter}
                    className="flex-1 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                >
                    +1
                </button>
            </div>
        </div>
    );
}