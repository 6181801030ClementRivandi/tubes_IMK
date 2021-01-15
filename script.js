var slideIndex = 0;
showSlides();
openContent(this,"Profile");

document.getElementById("btProfile").addEventListener("click",function() {openContent(this,"Profile")} );
document.getElementById("btAkademik").addEventListener("click",function() {openContent(this,"Akademik")} );
document.getElementById("btAgenda").addEventListener("click",function() {openContent(this,"Agenda")} );

document.getElementById("btKuliah").addEventListener("click",function() {showCont("Kuliah")} );
document.getElementById("btUTS").addEventListener("click",function() {showCont("UTS")} );
document.getElementById("btUAS").addEventListener("click",function() {showCont("UAS")} );

function showSlides() {
    var x;

    var slides = document.getElementsByClassName("images");

    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }

    if ( slideIndex == slides.length){
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";
        
    slideIndex++;

    setTimeout(showSlides, 8000);
}

function openContent(obj, idContentContainer){
    var i, x, tablinks;

    x = document.getElementsByClassName("tabs");
    for( i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for( i = 0; i < x.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" w3-flat-peter-river", "");
    }

    document.getElementById(idContentContainer).style.display = "block";

    obj.className += " w3-flat-peter-river";
}

function showCont(id){
    var x = document.getElementById(id);

    if ( x.className.indexOf("w3-show") == -1){
        x.className += "w3-show";
    }else{
        x.className = x.className.replace("w3-show","");
    }
}

+ function($){
    'use strict';

    var dropZone = document.getElementById('drop-zone');

    dropZone.ondrop = function(e){
        e.preventDefault();

        this.className = 'upload-drop-zone dropped';

        $(this).html("File dropped");
    }

    dropZone.ondragover = function(){

        this.className = 'upload-drop-zone drop';

        return false;
    }

    dropZone.ondragleave = function(){
        this.className = 'upload-drop-zone';
        return false;
    }
}(jQuery);

