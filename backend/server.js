const express = require ('express'); //importation d'express
const app=express();  //initialisation de l'application
const port=5000; //configuration du port

app.listen(port, ()=>{  //lancement de l'ecoute
    console.log(`Serveur démarré sur : http://localhost:${port}`);
});