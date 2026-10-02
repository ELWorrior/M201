import {useState} from "react";
function Student(){
    const[nom,setNom] = useState("")
    function greet(name){
        setNom(name)
    }
    return(
        <div className="mb-4 flex flex-wrap items-center gap-3">
            <button
                onClick={()=>greet()}
                className="rounded-lg bg-slate-700 px-4 py-2 text-white transition hover:bg-slate-800"
            >
                Greet 
            </button>
            <p className="text-gray-700">welcome : <span className="font-semibold">{nom}</span></p>
        </div>
    )

}
export default Student