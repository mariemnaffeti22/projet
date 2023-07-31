import React from "react";

const TacheTable = ({ taches, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Description</th>
          <th>Créer par</th>
          <th>Développeurs</th>
          <th>Priorité</th>
          <th>Avancement</th>
          <th>Date limite</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {taches.map((tache) => (
          <tr key={tache.id}>
            <td>{tache.nom}</td>
            <td>{tache.description}</td>
            <td>{tache.createur}</td>
            <td>{tache.developpeurs}</td>
            <td>{tache.priorite}</td>
            <td>{tache.avancement}</td>
            <td>{tache.dateLimite}</td>
            <td>
              <button onClick={() => onEdit(tache)}>Modifier</button>
              <button onClick={() => onDelete(tache.id)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TacheTable;
