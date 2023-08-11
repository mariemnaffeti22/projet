import React, { useState, useEffect } from "react";
import Axios from "axios";
import TacheTable from "./TacheTable";

const TacheList = ({ onEdit, onDelete }) => {
  const [taches, setTaches] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/taches") 
      .then((response) => {
        setTaches(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des tâches :", error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des tâches</h2>
      <TacheTable taches={taches} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default TacheList;
