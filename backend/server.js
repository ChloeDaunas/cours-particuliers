
import express from 'express'; //importation d'express
import mongoose from 'mongoose'; // Importation de mongoose pour la connexion à MongoDB
import dotenv from 'dotenv';// Charge les variables du fichier .env
dotenv.config();

const app=express();  //initialisation de l'application
app.use(express.json()); // Middleware pour parser le JSON
import eleveRoutes from './routes/eleveRoutes.js';
app.use('/api/eleve', eleveRoutes); // Utilisation des routes pour les élèves
import courRoutes from './routes/courRoutes.js';
app.use('/api/cour', courRoutes); // Utilisation des routes pour les cours


const PORT = process.env.PORT //configuration du port


// Connexion à la base de données
// INDICE : Utilise mongoose.connect(process.env.MONGO_URI)
// C'est une promesse, donc utilise .then() pour le succès et .catch() pour l'erreur

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connexion à MongoDB réussie !');
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB :', err);
  });

app.get('/', (req, res) => {
    res.send("Le serveur fonctionne et MongoDB est en attente...");
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur : http://localhost:${PORT}`);
});