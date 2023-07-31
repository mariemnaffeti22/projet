import React, { useState } from "react";
import TacheForm from "./TacheForm";
import TacheList from "./TacheList";
import { v4 as uuid } from "uuid";
import "./Taches.css"; // Importez le fichier de style Taches.css

const Taches = () => {
  const [taches, setTaches] = useState([]);

  const handleAddTache = (newTache) => {
    newTache.id = uuid();
    setTaches([...taches, newTache]);
  };

  const handleEditTache = (editedTache) => {
    setTaches((prevState) =>
      prevState.map((tache) => (tache.id === editedTache.id ? editedTache : tache))
    );
  };

  const handleDeleteTache = (tacheId) => {
    setTaches(taches.filter((tache) => tache.id !== tacheId));
  };

  return (
    <div className="taches-container"> {/* Utilisez une classe spécifique pour envelopper le contenu de la page Taches */}
      <TacheForm onSubmit={handleAddTache} />
      <TacheList taches={taches} onEdit={handleEditTache} onDelete={handleDeleteTache} />
    </div>
  );
};

export default Taches;
