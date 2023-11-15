let monto=document.getElementById("montoCredito").value;
let banco=document.getElementById("banco").value;
let cuota=document.getElementById("cuotas").value;

function aceptar(){
    document.writeln("llega hasta aca")
}

var botonAceptar=document.getElementById("aceptar");

botonAceptar.addEventListener("click",(e)=>{
    e.preventDefault();
    aceptar();
})