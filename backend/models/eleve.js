import mongoose from 'mongoose';

const eleveSchema = new mongoose.Schema({
    prenom: {
        type: String,
        required: true,
        trim: true // Supprime les espaces inutiles au début et à la fin
    },
    nom: {
        type: String,
        required: true,
        trim: true
    },
    classe:{
        type: String,
        required: true,
        trim: true
    },
    numeroTelephone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    telParent: {
        type: String,
        required: true,
        trim: true
    }

}, { timestamps: true }); // Cela ajoutera automatiquement 'createdAt' et 'updatedAt'

export default mongoose.model('eleve', eleveSchema);
