
## Stage BUT2 S.D. - Outil de Transfert de Données Cartographiques (SALIX $\leftrightarrow$ DREAL) 

<div align="center">
  
  <h1>Passerelle SALIX $\leftrightarrow$ DREAL : Transfert des données de haies financées</h1>
  <p> BUT -2- Sciences des Données | Mandir DIOP</p>
</div>

---

## 🎯 Objectif du Projet

Ce stage a pour objectif de développer une **passerelle** permettant le transfert automatisé des données de **haies financées** par l'AESN (Agence de l'Eau Seine-Normandie) vers le référentiel cartographique de la DREAL Normandie.
L'objectif est de faciliter la saisie des données par les technicien.ne.s Bocage et d'assurer un historique fiable et accessible des haies subventionnées pour la prise de décision (financement, arrachage, restauration, etc.).

## 🛠️ Missions Techniques

L'objectif du stage est de créer cette passerelle. Les tâches à réaliser comprennent :

* Structurer les données SALIX dans une forme compatible avec le format DREAL.
* Identifier les données récentes.
* Permettre les compléments éventuels avant export.
* Transférer les nouvelles données dans le fichier DREAL. Ce transfert prend actuellement la forme d’un géopackage[cite: 9].
* Tracer les exports.
* Intégrer cette passerelle dans le plugin Qgis SALIX.
* Si possible, automatiser et tracer l’envoi annuel.

## 📅 Contexte du Stage

| Détail | Information | 
| :--- | :--- |
| **Intitulé** | Développement d’un outil de transfert de données cartographiques | 
| **Durée** | 4 à 6 mois  | 
| **Début** | Mars-Avril  |
| **Lieu Principal** | CATER COM Ségrie-Fontaine (61) :  5 mois  | 
| **Lieu Secondaire** | Agence de l'Eau, Hérouville St-Clair : 1 à 2 mois (pour restitution)  |
| **Encadrement** | Responsable géomatique de la CATER COM, développeur de la base SALIX  |

## 💻 Livrables Attendus

À la fin du stage, les productions attendues sont :

* Script(s) SQL fonctionnel.
* Scripts Python fonctionnel et intégrés au plugin.
* Support de présentation de la passerelle (pptx/odp).
* Support utilisateur (docx/odt/pdf).

## 📧 Contacts Maîtres de Stage

Les renseignements complémentaires peuvent être demandés aux maîtres de stage:

* **Mme Anne Gouronnec** (E-mail : gouronnec.anne@aesn.fr) 
* **M. Cédric Gouineau** (E-mail : cedric.gouineau@cater-com.fr) 
=======
# 🌉 Passerelle SALIX $\leftrightarrow$ DREAL : Transfert automatisé des données de haies financées

## 💡 Aperçu du Projet (Stage BUT Sciences des Données, 2e Année)

Ce projet a été réalisé dans le cadre d'un stage de fin d'études en **BUT Sciences des Données**. Son objectif principal est de développer une **passerelle logicielle** robuste pour automatiser le transfert des données cartographiques de haies financées de la base **SALIX** vers le référentiel de la **DREAL Normandie**.

L'outil vise à garantir la fiabilité et l'accessibilité de l'historique des haies subventionnées, facilitant ainsi la prise de décision par les organismes gestionnaires (AESN, DREAL).

---

## 🎯 Objectifs et Missions

### Objectif Principal
Développer une solution intégrée au **plugin QGIS SALIX** capable d'extraire, de transformer et de charger (ETL) les données géographiques pertinentes vers un format standardisé (GeoPackage) compatible avec la DREAL.

### Missions Techniques Clés

* **Extraction et Structuration :** Adapter la structure des données issues de SALIX pour qu'elle corresponde aux exigences du format DREAL.
* **Identification :** Mettre en place un mécanisme pour identifier uniquement les données de haies récentes/nouvelles nécessitant un transfert.
* **Complément de Données :** Permettre l'ajout ou la modification de métadonnées avant l'export final.
* **Transfert :** Exécuter le transfert des nouvelles données vers le fichier GeoPackage DREAL.
* **Trazabilité :** Assurer la traçabilité complète des exports effectués.
* **Intégration :** Intégrer les scripts Python et SQL au sein du plugin QGIS SALIX existant.
* **Automatisation (Optionnel) :** Préparer, si possible, le mécanisme pour l'envoi annuel automatisé.

---

## 🛠️ Stack Technique

Le projet repose sur les technologies suivantes :

| Catégorie | Outil / Langage | Rôle dans le Projet |
| :--- | :--- | :--- |
| **Langage de Programmation** | **Python** | Développement de la logique de la passerelle et de l'intégration QGIS. |
| **Gestion de Base de Données** | **SQL** (PostgreSQL/PostGIS) | Requêtes d'extraction et de structuration des données de la base SALIX. |
| **Système d'Information Géographique** | **QGIS** | Environnement d'exécution (via le plugin SALIX) et gestion des formats géospatiaux (GeoPackage). |
| **Versionnement** | **Git / GitHub / CLOUD** | Suivi des versions, collaboration et hébergement du code source. |

---

## 🚀 Installation et Utilisation

Ce projet est conçu pour être intégré dans un environnement existant (le plugin QGIS SALIX).

### Prérequis

* QGIS (version minimale spécifiée par l'équipe SALIX)
* Accès à la base de données SALIX (PostgreSQL/PostGIS)
* Bibliothèques Python spécifiques pour la gestion des données géospatiales (ex: `geopandas`, `psycopg2`, etc.).

### Étapes de Déploiement

1.  **Cloner le dépôt :**
    ```bash
    git clone [https://github.com/votre_utilisateur/nom-du-depot.git](https://github.com/votre_utilisateur/nom-du-depot.git)
    ```
2.  **Intégration QGIS :** Les scripts Python (`salix_dreal_transfert.py`) et les fichiers SQL devront être placés dans la structure du plugin QGIS SALIX selon les spécifications de l'encadrant.
3.  **Configuration des Connexions :** S'assurer que les paramètres de connexion à la base de données SALIX sont correctement configurés dans le code ou l'environnement QGIS.

### Fonctionnement de la Passerelle

1.  L'utilisateur lance l'outil depuis le menu du plugin SALIX dans QGIS.
2.  Le script SQL exécute l'extraction et la transformation des données de haies récentes.
3.  Le script Python gère la phase de validation (compléments éventuels) et l'export au format GeoPackage (`haies_financees_DREAL_AAAA.gpkg`).
4.  Le processus est journalisé pour la traçabilité.

---

## 📦 Livrables du Stage

À la fin du stage, les productions suivantes ont été réalisées :

* Scripts SQL fonctionnels (extraction et transformation).
* Scripts Python fonctionnels, intégrés au plugin QGIS.
* Support de présentation de la passerelle (PPTX/ODP).
* Support utilisateur (documentation DOCX/PDF).

---

## 📧 Contact et Encadrement

| Rôle | Nom et Prénom | Organisation | Contact |
| :--- | :--- | :--- | :--- |
| **Stagiaire** | Mandir DIOP | BUT Sciences des Données - LISIEUX | diopmandir53@gmail.com |
| **Maître de Stage (Technique)** | M. Cédric Gouineau | CATER COM | cedric.gouineau@cater-com.fr |
| **Maître de Stage (Administratif)** | Mme Anne Gouronnec | AESN | gouronnec.anne@aesn.fr |
