router.get('/stat', async (req, res) => {
    try {
        const { eleveId, annee, mois } = req.query; // On récupère les filtres depuis l'URL
        let filtres = {};

        if(eleveId) {
            filtres.eleveId = mongoose.Types.ObjectId(eleveId);
        }

        if(annee || mois) {
            const y = parseInt(annee) || new Date().getFullYear();
            const m = mois ? parseInt(mois) - 1 : 0; // -1 car les mois commencent à 0 en JS
            
            const dateDebut = new Date(y, m, 1);
            const dateFin = mois 
                ? new Date(y, m + 1, 0, 23, 59, 59) // Dernier jour du mois
                : new Date(y, 11, 31, 23, 59, 59);  // Dernier jour de l'année
                
            filtres.heureDebut = { $gte: dateDebut, $lte: dateFin };
        }

        const stat=await cour.aggregate([
            { $match: filtres }, // ON FILTRE D'ABORD
            {
                $group:{
                    _id: null, // On veut un résultat global (pas groupé par élève)
                    totalRevenu: { $sum: { $cond: [{ $eq: ["$paye", true] }, "$prix", 0] } },
                    totalHeures: { $sum: "$duree" },
                    nombreDeCours: { $sum: 1 }
                }
            }
        ]);

            res.status(200).json({
            chiffreAffaire: stat[0]?.totalRevenu || 0,
            heuresTotales: (stat[0]?.totalHeures || 0) / 60, // On convertit les minutes en heures
            nombreCours: stat[0]?.nombreDeCours || 0,

        });
        } catch (error) {
        res.status(500).json({ message: error.message });
    }
});