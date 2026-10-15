export const data = {
  DD201: [
    { id: 1, nom: "Yassine", note: 14 },
    { id: 2, nom: "Sara", note: 16 }
  ],
  DD202: [
    { id: 3, nom: "Youssef", note: 12 },
    { id: 4, nom: "Ghita", note: 10 }
  ],
  DD203: [
    { id: 5, nom: "Omar", note: 9 },
    { id: 6, nom: "Salma", note: 15 }
  ]
};
import React, { useState, useEffect } from 'react';
import { data } from './data';

export default function GestionEtudiants() {
  const [groupes, setGroupes] = useState([]);
  const [selectedGroupe, setSelectedGroupe] = useState('');
  const [etudiants, setEtudiants] = useState([]);

  // Q1 : Remplir la liste des groupes au montage du composant (1er useEffect)
  useEffect(() => {
    const listeGroupes = Object.keys(data);
    setGroupes(listeGroupes);
    if (listeGroupes.length > 0) {
      setSelectedGroupe(listeGroupes[0]);
    }
  }, []);

  // Q3 : Charger les étudiants correspondant au groupe sélectionné (2ème useEffect)
  useEffect(() => {
    if (selectedGroupe && data[selectedGroupe]) {
      setEtudiants(data[selectedGroupe]);
    }
  }, [selectedGroupe]);

  // Q2 : Mémoriser le groupe sélectionné au changement dans le select
  const handleGroupeChange = (e) => {
    setSelectedGroupe(e.target.value);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Gestion des étudiants</h2>

      <label style={{ display: 'block', marginBottom: '8px' }}>Choisir un groupe :</label>
      <select 
        value={selectedGroupe} 
        onChange={handleGroupeChange} 
        style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
      >
        {groupes.map((groupe) => (
          <option key={groupe} value={groupe}>
            {groupe}
          </option>
        ))}
      </select>

      <h3>ETUDIANTS DU GROUPE {selectedGroupe}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Q4 / Contrainte : Affichage de la liste avec .map() */}
        {etudiants.map((etudiant) => (
          <div 
            key={etudiant.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '10px', 
              backgroundColor: '#f9f9f9', 
              borderRadius: '4px' 
            }}
          >
            <div>
              <strong>{etudiant.nom}</strong>
              <div style={{ fontSize: '12px', color: '#666' }}>Note : {etudiant.note} / 20</div>
            </div>
            <span style={{ color: etudiant.note >= 10 ? 'green' : 'red', fontWeight: 'bold' }}>
              {etudiant.note >= 10 ? 'Admis' : 'Non Admis'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}