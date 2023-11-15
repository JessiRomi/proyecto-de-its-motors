var montoCuota=0;

function aceptar(){
    let monto=parseFloat(document.getElementById("montoCredito").value);
    alert("monto es "+monto);
    alert(typeof(monto));
    let banco=document.getElementById("banco").value;
    alert("banco es "+banco);
    let cuota=parseInt(document.getElementById("cuotas").value);
    alert("cuota es "+cuota);
    alert(typeof(cuota));
    if(monto>=0 && banco!="" && cuota!=""){
        switch(banco){
            case "patagonia":if(cuota==12){
                                montoCuota=monto*1.25/12;
                             }
                             else if(cuota==24){
                                montoCuota=monto*1.50/24;
                             }
                             else if(cuota==36){
                                montoCuota=monto*1.75/36
                             }
                             break;
            case "nacion":if(cuota==12){
                                montoCuota=monto*1.20/12;
                             }
                             else if(cuota==24){
                                montoCuota=monto*1.40/24;
                             }
                             else if(cuota==36){
                                montoCuota=monto*1.65/36
                             }
                             break;
            case "hsbc":if(cuota==12){
                                montoCuota=monto*1.35/12;
                             }
                             else if(cuota==24){
                                montoCuota=monto*1.55/24;
                             }
                             else if(cuota==36){
                                montoCuota=monto*1.80/36
                             }
                             break;
        }
        alert(`El monto $${monto} financiado en ${cuota} cuotas con el banco ${banco} da una cuota de $${montoCuota} por mes`);
    }
    else{
        alert("No puede haber campos vacios o invalidos")
    }
    document.getElementById("montoCredito").value="";
    document.getElementById("banco").value="";
    document.getElementById("cuotas").value="";
}

var botonAceptar=document.getElementById("aceptar");

botonAceptar.addEventListener("click",(e)=>{
    e.preventDefault();
    aceptar();
})