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

export default router;