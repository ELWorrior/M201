import { useState, useEffect } from "react";

export default function Student() {
  const [nom, setNom] = useState("empty");

  useEffect(function () {
    console.log(nom);
    console.log("visited");
    setNom("mostapha");
  }, []);

  useEffect(function () {
    console.log("le nom a changé");
  }, [nom]);

  function tester() {
    setNom("Khalid");
  }

  return (
    <div className="p-4 space-y-3">
      <p className="text-lg">
        Welcome <span className="font-bold">{nom}</span>!!
      </p>

      <button
        onClick={tester}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Tester
      </button>
    </div>
  );
}