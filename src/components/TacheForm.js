import React, { useState } from "react";

const TacheForm = ({ onSubmit }) => {
  // Déclaration de l'état local pour gérer les champs du formulaire
  const [tache, setTache] = useState({
    nom: "",
    description: "",
    createur: "",
    developpeurs: "",
    priorite: "",
    avancement: "",
    dateLimite: "",
  });

  // Gestion du changement des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTache({ ...tache, [name]: value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(tache); // Appeler la fonction de gestion de l'ajout d'une tâche
    setTache({
      nom: "",
      description: "",
      createur: "",
      developpeurs: "",
      priorite: "",
      avancement: "",
      dateLimite: "",
    }); // Réinitialiser le formulaire après soumission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nom"
        value={tache.nom}
        onChange={handleChange}
        placeholder="Nom de la tâche"
      />
      <input
        type="text"
        name="description"
        value={tache.description}
        onChange={handleChange}
        placeholder="Description de la tâche"
      />
      <input
        type="text"
        name="createur"
        value={tache.createur}
        onChange={handleChange}
        placeholder="Créer par"
      />
      <input
        type="text"
        name="developpeurs"
        value={tache.developpeurs}
        onChange={handleChange}
        placeholder="Développeurs"
      />
      <input
        type="text"
        name="priorite"
        value={tache.priorite}
        onChange={handleChange}
        placeholder="Priorité"
      />
      <input
        type="text"
        name="avancement"
        value={tache.avancement}
        onChange={handleChange}
        placeholder="Avancement"
      />
      <input
        type="date"
        name="dateLimite"
        value={tache.dateLimite}
        onChange={handleChange}
        placeholder="Date limite"
      />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default TacheForm;
