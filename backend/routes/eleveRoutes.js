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

router.get('/all', async (req, res) => {
    try {
        const listeEleves = await eleve.find();

         res.status(200).json(listeEleves);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/update/:id', async (req, res) => {
    try {
        // On cherche par l'ID et on applique les changements contenus dans req.body
        const updatedEleve = await eleve.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true } // Cette option permet de renvoyer l'objet APRÈS modification
        );
        res.status(200).json(updatedEleve);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        await eleve.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Élève supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;