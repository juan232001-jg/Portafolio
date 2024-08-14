let menuVisible=false;
// Funcion que oculata y muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList="";
        menuVisible= false;
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible= true;
    }
}
function seleccionar(){
    // Oculata el menu una vez que selelciona una opcion del menu
    document.getElementById("nav").classList= "";
    menuVisible= false; 
}
// Funcones que aplica las animaciones de las habilidades 
function efectoHabillidades(){
    var skills= document.getElementById("skills");
    var distanci_skills=window.innerHeight= skills.getBoundingClientRect().top;
    if (distanci_skills >= 300) {
        let habiliadades= document.getElementsByClassName("progreso");
    }
}
// Decto el scrolling para aplicar las animaciones de las barras de habiliadades 
window.onscroll = function(){
    efectoHabillidades()
}