import React, { useState } from "react";
import Axios from "axios"; 

const TacheForm = ({ onSubmit }) => {
  const [tache, setTache] = useState({
    nom: "",
    description: "",
    createur: "",
    developpeurs: "",
    priorite: "",
    avancement: "",
    dateLimite: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTache({ ...tache, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    Axios.post("http://localhost:4000/create", tache)
    .then((response) => {
        onSubmit(response.data); 
        setTache({
          nom: "",
          description: "",
          createur: "",
          developpeurs: "",
          priorite: "",
          avancement: "",
          dateLimite: "",
        });
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout de la tâche :", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nom:</label>
      <input
        type="text"
        name="nom"
        value={tache.nom}
        onChange={handleChange}
        placeholder="Nom de la tâche"
      /><br></br>

      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={tache.description}
        onChange={handleChange}
        placeholder="Description de la tâche"
      /><br></br>

      <label>Créateur:</label>
      <input
        type="text"
        name="createur"
        value={tache.createur}
        onChange={handleChange}
        placeholder="Créé par"
      /><br></br>

      <label>Développeurs:</label>
      <input
        type="text"
        name="developpeurs"
        value={tache.developpeurs}
        onChange={handleChange}
        placeholder="Développeurs"
      /><br></br>

      <label>Priorité:</label>
      <input
        type="text"
        name="priorite"
        value={tache.priorite}
        onChange={handleChange}
        placeholder="Priorité"
      /><br></br>

      <label>Avancement:</label>
      <input
        type="text"
        name="avancement"
        value={tache.avancement}
        onChange={handleChange}
        placeholder="Avancement"
      /><br></br>

      <label>Date Limite:</label>
      <input
        type="date"
        name="dateLimite"
        value={tache.dateLimite}
        onChange={handleChange}
        placeholder="Date limite"
      /><br></br>

      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default TacheForm;
