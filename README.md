# BlaBla dans les Musées

Creer un espace de Blabla dans un musée.

## Technologies

Le projet utilise principalement nodeJS (backend) et ExpressJS (frontend).

## Usage

### Installation

Cloner le repertoire git, installer les modules nécessaires à git ainsi que les dépendances. Le projet est testeé sous Linux (Ubuntu 13.10).

```
git clone git@github.com:jdourlens/BlaBlaMusee.git
```

Les dépendances de bases sont:
* nodejs
* expressjs

Il faut installer les modules node listés dans le fichier package.json.

```
cd BlaBlaMusee && sudo node install
```

Les dépendances pour le traitement du son sont:
* sox
* flac
* arecord
* wget

arecord et wget sont inclus de base dans la plus grande partie des distributions Linux.

Le chemin vers le dossier temporaire (tmpFolder) défini dans app.js doit etre existant.

### Utilisation

```
node app.js
```

Naviguez ensuite sur la page:
```
127.0.0.1:3000
```

Pour obtenir les informations, visitez:
```
127.0.0.1:3000/info
```

## Equipe



## License

Le code est distribué sous la license GPL jointe dans le code source.
