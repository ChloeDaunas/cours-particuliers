import express from'express';
const router = express.Router();
import eleve from '../models/eleve.js'; // On importe ton modèle

// Route pour créer un élève
router.post('/add', async (req, res) => {
    try {
        // req.body contient les données envoyées (nom, prénom, etc.)
        const newStudent = new eleve(req.body);

        await newStudent.save();  // Enregistre dans MongoDB
        res.status(201).json(newStudent); // Renvoie une réponse de succès avec l'élève créé
        
        
    } catch (error) {
        // En cas d'erreur (ex: champ manquant), on renvoie une erreur
        res.status(400).json({ message: error.message });
    }
});

export default router;