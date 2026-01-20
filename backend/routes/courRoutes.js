import express from 'express';
const router = express.Router();
import cour from '../models/cour.js'; // On importe ton modèle

router.post('/add', async (req, res) => {
    try {
        const newCour = new cour(req.body);
        await newCour.save();
        res.status(201).json(newCour);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }   
});

router.get('/all', async (req, res) => {
    try {
        const listeCours = await cour.find().populate('eleveId');
        res.status(200).json(listeCours);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
});

router.patch('/update/:id', async (req, res) => {
    try {
        // On cherche par l'ID et on applique les changements contenus dans req.body
        const updatedCour = await cour.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } // Cette option permet de renvoyer l'objet APRÈS modification
        );
        res.status(200).json(updatedCour);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        await cour.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Cours supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});





export default router;