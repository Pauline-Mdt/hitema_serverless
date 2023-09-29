# Conception et mise en oeuvre du back-office du site web "Les Gorgones" avec les services Azure

## Identification du problème

Le site web actuel du salon de tatouage "Les Gorgones" utilise une architecture API Laravel + front React hébergée sur un serveur mutualisé. Cela pose des problèmes de scalabilité, de performances et de sécurité. De plus, l'authentification actuelle n'est pas optimale. L'objectif est de moderniser le système pour améliorer la gestion du front-office et permettre aux tatoueurs d'accéder à leur compte en ligne de manière plus efficace et sécurisée.
![image](https://github.com/Pauline-Mdt/hitema_serverless/assets/84323735/89fffb99-d95e-4cde-bdad-f53db552dfd2)

## Conception de la solution

La solution consiste à migrer vers une architecture cloud Azure pour gagner en évolutivité, en performances et en sécurité. Voici les étapes de conception :

- Utilisation de Azure Cosmos DB : Migrer la base de données actuelle vers Azure Cosmos DB pour une gestion des données évolutive et distribuée.
- Azure Functions : Remplacer l'API Laravel par des Azure Functions pour gérer les opérations back-end de manière évolutive et sans serveur. Paramétrer l'authentification avec des Single Sign-On (SSO) mis à disposition par Azure pour améliorer et faciliter l'authentification.
![image](https://github.com/Pauline-Mdt/hitema_serverless/assets/84323735/ac1546ac-39ac-48d0-907a-6b36260de380)

## Mise en oeuvre de la solution

1. Création d'un groupe de ressources dédiés au projet
2. Création d'un compte Cosmo DB pour Mongo DB et création de la base de données
3. Création des premières Azure Functions
	- Tattooists Get
	- Tattooists List

## Documentation

- Modèles des ressources Azure crées : (models)
- Code des Azure fonctions et leurs HTTP triggers : (code) 

## Livraison

Liens les endpoints de l'API 
- Tattooists List : (https://api-tattooists-list.azurewebsites.net/api/httptrigger)
- Tattooists Get : (https://api-tattooists-get.azurewebsites.net/api/httptrigger?id=B8E30737-758B-49E0-A153-B210B80749F4)
