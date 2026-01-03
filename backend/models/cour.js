import mongoose from 'mongoose';

const courSchema = new mongoose.Schema({
    eleve: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'eleve',
        required: true
    },
    heureDebut: {
        type: Date,
        required: true
    },
    durée: {
        type: String, 
        required: true
    },
    prix: {
        type: Number
    },
    effectué: {
        type: Boolean,
        default: false
    },
    payé: {
        type: Boolean,
        default: false
    }
}, {timestamps: true}); // Cela ajoutera automatiquement 'createdAt' et 'updatedAt'

export default mongoose.model('cour', courSchema);