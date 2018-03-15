# Filtre Photo


FiltrePhoto est un outil permettant de rendre vie à vos photos. Avec ce plugin vous pouvez choisir un effet pour chaque photo de votre site.

## Installation

- [Télécharger le dossier](https://github.com/Eliza43/FiltrePhoto).
- Ajoutez le fichier filtre.js dans votre dossier javascript
- Ajoutez le fichier style.css dans votre dossier css
- Reliez ces fichiers à votre index.html
- Inclure le menu des filtres dans votre index.html

```
<form id="filtre">
    <p>
        <label>Choissisez votre filtre</label>
        <br/>
        <select name="filtre" id="filtreList" >
            <option id="basique" value="basique">Basique</option>
            <option id="grayscale"  value="grayscale">Grayscale</option>
            <option id="sepia" value="sepia">Sépia</option>
            <option id="floutage" value="floutage">Flou</option>
            <option id="invert" value="invert">Invert</option>
            <option id="saturation" value="saturation">Saturation</option>
            <option id="brightness" value="brightness">brightness</option>
            <option id="hue-rotate" value="hue-rotate">hue-rotate</option>
            <option id="lumiere" value="lumiere">lumiere</option>
        </select>
    </p>
</form>
```
