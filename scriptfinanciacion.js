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
        imprimir.innerHTML +=`
        <p>EL MONTO SOLICITADO ES $ ${monto}<br>
        EN EL BANCO ${banco}<br>
        EN ${cuota} CUOTAS<br>
        EL MONTO DE LA CUOTA SERA DE $ ${montoCuota}</p> `;
        
    }
    else{
        alert("No puede haber campos vacios o invalidos")
    }
}

var botonAceptar=document.getElementById("aceptar");

botonAceptar.addEventListener("click",(e)=>{
    e.preventDefault();
    aceptar();
})