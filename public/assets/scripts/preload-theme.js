// Leer preferencias guardadas
const modo = localStorage.getItem("modo") || "claro";
const iconSize = localStorage.getItem("iconSize") || "mediano";
const fontSize = localStorage.getItem("fontSize") || "mediano";

// Aplicar Modo (oscuro / claro)
function aplicarModo(modo){
    if(modo === "oscuro"){
        document.documentElement.style.setProperty('--bg', '#000000');
        document.documentElement.style.setProperty('--sidebar', '#111111');
        document.documentElement.style.setProperty('--text-color', 'white');
    } else {
        document.documentElement.style.setProperty('--bg', '#05345c');
        document.documentElement.style.setProperty('--sidebar', '#03243f');
        document.documentElement.style.setProperty('--text-color', 'white');
    }
}

// Tamaño de iconos
function aplicarIconSize(size){
    let px = "28px";
    if(size === "pequeño") px = "20px";
    if(size === "mediano") px = "28px";
    if(size === "grande") px = "36px";
    document.documentElement.style.setProperty('--icon-size', px);
}

// Tamaño de letra
function aplicarFontSize(size){
    let px = "17px";
    if(size === "pequeño") px = "14px";
    if(size === "mediano") px = "17px";
    if(size === "grande") px = "22px";
    document.documentElement.style.setProperty('--font-size', px);
}

// Aplicar todo antes de que cargue la página
aplicarModo(modo);
aplicarIconSize(iconSize);
aplicarFontSize(fontSize);
