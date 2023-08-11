const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors'); 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'systemTaches', 
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connecté à la base de données MySQL !');
  }
});

app.use(cors());

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'application de gestion des tâches');
});


app.post('/create', (req, res) => {
  const { nom, description, createur, developpeurs, priorite, avancement, dateLimite } = req.body;

  connection.query(
    'INSERT INTO taches(nom, description, createur, developpeurs, priorite, avancement, dateLimite) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [nom, description, createur, developpeurs, priorite, avancement, dateLimite],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Erreur lors de l\'insertion de la tâche');
      } else {
        res.status(200).send('Tâche insérée avec succès');
      }
    }
  );
});


app.get('/taches', (req, res) => {
  connection.query('SELECT * FROM taches', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erreur lors de la récupération des tâches');
    } else {
      res.status(200).json(results);
    }
  });
});


app.get('/taches/:id', (req, res) => {
  const taskId = req.params.id;

  connection.query('SELECT * FROM taches WHERE id = ?', [taskId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erreur lors de la récupération de la tâche');
    } else {
      if (result.length === 0) {
        res.status(404).send('Tâche non trouvée');
      } else {
        res.status(200).json(result[0]);
      }
    }
  });
});

app.put('/taches/:id', (req, res) => {
  const taskId = req.params.id;
  const { nom, description, createur, developpeurs, priorite, avancement, dateLimite } = req.body;

  connection.query(
    'UPDATE taches SET nom = ?, description = ?, createur = ?, developpeurs = ?, priorite = ?, avancement = ?, dateLimite = ? WHERE id = ?',
    [nom, description, createur, developpeurs, priorite, avancement, dateLimite, taskId],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Erreur lors de la mise à jour de la tâche');
      } else {
        res.status(200).send('Tâche mise à jour avec succès');
      }
    }
  );
});

app.delete('/taches/:id', (req, res) => {
  const taskId = req.params.id;

  connection.query('DELETE FROM taches WHERE id = ?', [taskId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erreur lors de la suppression de la tâche');
    } else {
      res.status(200).send('Tâche supprimée avec succès');
    }
  });
});

app.listen(4000, () => {
  console.log('Votre serveur est en cours d\'exécution sur le port 4000');
});


})

app.listen(4000,() => {
console.log("your server is running on port 4000");
});
