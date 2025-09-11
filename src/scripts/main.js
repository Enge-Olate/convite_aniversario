const aniversario = new Date('Sep 17, 2025 20:00:00');
const tempoAniversario = aniversario.getTime();

function dias(){
    return 1000 * 60 **2 *24;
}
function horas(){
    return 1000 * 60**2;
}
function minutos(){
    return 1000 * 60;
}
const contandoHoras = setInterval(() => {
    let agora = new Date();
    let tempoAgora = agora.getTime();
    let diferenca = tempoAniversario - tempoAgora;
    document.querySelector('h1').innerHTML=`Faltam
        ${Math.floor(diferenca / dias())}d
        ${((diferenca % dias())/horas()).toFixed(2)}h
        ${((diferenca % horas())/minutos()).toFixed(2)}m
        ${Math.floor((diferenca % minutos())/ 1000)}s
    `
    if(diferenca < 0){
        clearInterval(contandoHoras);
        document.querySelector('p').innerHTML='Expirado!';
    }
}, 1000);
