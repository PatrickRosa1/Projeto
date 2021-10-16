
var hora=0;
var minutos=0;
var segundos=0;

var temp=1000; //Milésimos que valem 1 segundo
var crono;

function start(){
        crono = setInterval (() => {tempo();},temp);
    
} // Iniciar o contador

function pause(){
    clearInterval (crono);
    
} // para o contador 

function reset(){
clearInterval(crono);
hora=0;
minutos=0;
segundos=0;
document.getElementById('counter').innerText = '00:00:00'
}  // para o contador e seta todos valores em 0

function tempo(){
     segundos++;

       if (segundos==59){
              segundos=0;
              minutos++; 
              // condição que segundos chega em 59 e acrescenta 1 a minutos
       }
       if(minutos==59){
           minutos=0;
           hora++; 
           // minutos chega em 59volta a 0 e add 1 em horas
       }
    
var formato = (hora < 10 ? '0' + hora: hora) + ':' +(minutos <10 ? '0' + minutos : minutos )+':'+(segundos < 10 ? '0'+ segundos:segundos);
document.getElementById('counter').innerText = formato;

return formato;
}