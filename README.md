Voici un README.md complet et professionnel pour ton projet. Il permettra à n'importe qui (ou à toi-même dans quelques mois) de comprendre comment installer et lancer l'application.
🎓 Gestionnaire de Cours Particuliers

Une application web full-stack pour gérer le suivi des élèves, les horaires de cours et calculer automatiquement le chiffre d'affaires.
🚀 Fonctionnalités

    Dashboard Dynamique : Visualisation du chiffre d'affaires, du nombre d'heures totales et du nombre de cours.

    Filtres Intelligents : Statistiques filtrables par mois, par année ou par élève spécifique.

    Gestion des Élèves :

        Affichage sous forme de cartes (Box) modernes et responsives.

        Ajout d'élèves via un panneau latéral (Drawer) coulissant.

        Suivi des coordonnées (téléphone, email, parent) et du niveau scolaire.

    Interface Moderne : Navigation fluide sans rechargement de page grâce à React Router.

🛠️ Stack Technique

Frontend :

    React.js (Vite)

    React Router Dom (Navigation)

    Axios (Appels API)

    CSS3 (Flexbox & Grid)

Backend :

    Node.js & Express

    MongoDB & Mongoose (Base de données)

    Cors (Sécurité des échanges)

📦 Installation
1. Cloner le projet
Bash

git clone <url-du-repo>
cd gestion-des-cours

2. Configuration du Backend

    Allez dans le dossier backend : cd backend

    Installez les dépendances : npm install

    Créez un fichier .env et ajoutez votre URI MongoDB :
    Extrait de code

    MONGO_URI=mongodb+srv://...
    PORT=5000

    Lancez le serveur : npm run dev (ou node server.js)

3. Configuration du Frontend

    Allez dans le dossier frontend : cd ../frontend

    Installez les dépendances : npm install

    Lancez l'interface : npm run dev

    Ouvrez votre navigateur sur : http://localhost:5173

📂 Structure du projet
Plaintext

/
├── backend/
│   ├── models/       # Schémas Mongoose (Eleve, Cour)
│   ├── routes/       # Points d'entrée API
│   └── server.js     # Configuration Express
└── frontend/
    ├── src/
    │   ├── components/ # Composants réutilisables (Drawer, etc.)
    │   ├── pages/      # Dashboard, Liste des élèves
    │   ├── App.jsx     # Routage et Header global
    │   └── main.jsx

📝 API Endpoints (Exemples)
Méthode	Chemin	Description
GET	/api/students/all	Récupère tous les élèves
POST	/api/students/add	Ajoute un nouvel élève
GET	/api/cour/stats	Calcule les stats (filtres: mois, annee, eleveId)
