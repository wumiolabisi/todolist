# Description
Créer une API pour gérer une liste de tâches. L'API permettra d'ajouter, de supprimer, de modifier et de marquer des tâches comme terminées. Les tâches seront stockées en mémoire (pas de base de données nécessaire pour ce projet).

# Fonctionnalités

    * GET /tasks : Récupère toutes les tâches.
    * POST /tasks : Ajoute une nouvelle tâche.
    * PUT /tasks/ : Modifie une tâche existante.
    * DELETE /tasks/ : Supprime une tâche.
    * PATCH /tasks/
    * /complete : Marque une tâche comme terminée.

# Tests 

    S'assurer que les routes fonctionnent comme prévu.
    Vérifier que les tâches sont correctement ajoutées, modifiées, et supprimées.
    Tester la gestion des erreurs (par exemple, tentative de suppression d'une tâche qui n'existe pas).