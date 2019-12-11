var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    var modal = document.getElementById("overlay");
    var modalLg = document.getElementById("overlayLg");
    modal.style.display = "none";
    modalLg.style.display = "none";
}


function overlayOpen(n) {
    var modal = document.getElementById("overlay");
    var modalLg = document.getElementById("overlayLg")
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(n);
    var modalImg = document.getElementById("overlayphoto");
    var captionText = document.getElementById("overlaytext");
    modal.style.display = "inline-block";
    modalLg.style.display = "flex";
    modalImg.src = img.src;
    /*captionText.innerHTML = img.alt;*/
    captionText.style.display = "inline-block";

}
