window.addEventListener("scroll", function() {
    var botonArriba = document.getElementById("boton_arriba"); 
    
    if (window.scrollY > 100) { 
      botonArriba.style.display = "block";
    } 
    
    else {
      botonArriba.style.display = "none";
    }
  });