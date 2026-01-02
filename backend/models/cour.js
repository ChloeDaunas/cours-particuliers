import mangoose from 'mongoose';

const courSchema = new mangoose.Schema({
    eleve: {
        type: mangoose.Schema.Types.ObjectId,
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

module.exports = mongoose.model('cour', courSchema);