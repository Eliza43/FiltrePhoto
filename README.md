# Filtre Photo


FiltrePhoto est un outil permettant de rendre vie à vos photos. Avec ce plugin vous pouvez choisir un effet pour chaque photo de votre site.

## Installation

- [Télécharger le dossier](https://github.com/Eliza43/FiltrePhoto).
- [Télécharger la librairie jquery](https://jquery.com/).

## Inclure 
- Inclure le menu des filtres dans votre index.html

```
<!-- The Modal -->
<div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <span class="close">&times;</span>
        <form id="filtre">
            <p>
                <label>Choissisez votre filtre</label>
                <br/>
                <select name="filtre" id="filtreList">
                    <option id="basique" value="basique">Basique</option>
                    <option id="grayscale" value="grayscale">Grayscale</option>
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
    </div>

</div>
```

- Ajoutez le fichier filtre.js dans votre dossier javascript

```
<!-- Code de Filtre Photo -->
<script src="js/filtre.js"></script>
```

- Reliez la librairie Jquery

```
<!-- Le style relier au effet -->
<script src="js/jquery-3.3.1.min.js"></script>
```

- Reliez les effets appliqué sur la liste des filtres

```
<!-- Le style relier au effet -->
<link rel="stylesheet" href="css/style.css">
```

