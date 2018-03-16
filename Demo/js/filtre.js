$(document).ready(init);
var images;

function init() {


    images = document.getElementsByClassName("img");
    for (var i = 0; i < images.length; i++) {
        //console.log("taille:"+images.length);
        images[i].addEventListener('click', myFunction, false);
    }

}


function myFunction() {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    //console.log(this);
    var indexImg = this.length - 1;

    var image = this;
    //console.log(image);

    //apparition du select
    modal.style.display = "block";


    //listener pour le select
    document.getElementById("filtreList").onchange = function (evt) {
        console.log("entree");
        //récupération du nom de l'effet
        var test = this.options[this.selectedIndex].value;
        //console.log(test);
        //ajout de la classe correspondante à un effet sur l'image
        image.className = test;
        //console.log("test");
        //console.log(image);

    };

}

/*
function reply_click() {
    var test = this.options[this.selectedIndex].value;
    console.log(test);
    document.getElementById('img').className = test;
    document.getElementById("filtre").style.display = "none";
}
*/





