import React from "react";
import TacheTable from "./TacheTable";

const TacheList = ({ taches, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Liste des tâches</h2>
      <TacheTable taches={taches} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default TacheList;
