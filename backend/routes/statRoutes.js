router.get('/stat', async (req, res) => {
    try {
        const stat=await cour.aggregate([
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