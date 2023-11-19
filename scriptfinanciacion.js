var montoCuota=0;

function aceptar(){
    var monto=parseFloat(document.getElementById("montoCredito").value);
    var banco=document.getElementById("banco").value;
    var cuota=parseInt(document.getElementById("cuotas").value);
    if(monto>=0 && banco!="" && cuota!=""){
        switch(banco){
            case "PATAGONIA":if(cuota==12){
                                montoCuota=monto*1.25/12;
                             }
                             else if(cuota==24){
                                montoCuota=monto*1.50/24;
                             }
                             else if(cuota==36){
                                montoCuota=monto*1.75/36
                             }
                             break;
            case "NACION":if(cuota==12){
                                montoCuota=monto*1.20/12;
                             }
                             else if(cuota==24){
                                montoCuota=monto*1.40/24;
                             }
                             else if(cuota==36){
                                montoCuota=monto*1.65/36
                             }
                             break;
            case "HSBC":if(cuota==12){
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
        
    
        imprimir.innerHTML +=`EL MONTO SOLICITADO ES $ ${monto} <br>`;
        imprimir.innerHTML +=`EN EL BANCO ${banco}<br>`;
        imprimir.innerHTML +=`EN ${cuota} CUOTAS<br>`;
        imprimir.innerHTML +=`EL MONTO DE LA CUOTA SERA DE $ ${montoCuota}<br>`;
        
    }
    else{
        alert("No puede haber campos vacios o invalidos")
    }
    
    //document.getElementById("montoCredito").value="";
    //document.getElementById("banco").value="";
    //document.getElementById("cuotas").value="";
}

var botonAceptar=document.getElementById("aceptar");

botonAceptar.addEventListener("click",(e)=>{
    e.preventDefault();
    aceptar();
})