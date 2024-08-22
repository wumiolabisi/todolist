const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const data = [

    {
        id: 1,
        libelle: "Benchmark et recherches",
        description: "Voir les différents concurrents de la marque comme Christie Brown, etc...",
        statut: "Terminé",
    },
    {
        id: 2,
        libelle: "Réaliser une proposition de maquettes",
        description: "Qui découle des recherches effectuées",
        statut: "Terminé",
    },
    {
        id: 3,
        libelle: "Environnement de dev : configuration de WordPress",
        description: "Mise en place de l'environnement de développement de la boutique",
        statut: "En cours",
    },
    {
        id: 4,
        libelle: "Intégration des maquettes",
        description: "Intégrer le design validé avec l'équipe",
        statut: "A faire",
    }
];
app.use(express.json());

app.get("/", (req, res, data) => {
    res.json({ message: "Accueil de l'API" });
});

const tasks = require("./routes/tasks");
app.use("/tasks", tasks);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
