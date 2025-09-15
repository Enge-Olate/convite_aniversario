document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("button-form");
  const botaoConfirmacao = document.getElementById("botao-confirmacao");
  botao.addEventListener("click", () => {
    const formulario = document.querySelector(".formulario");
    formulario.classList.remove("formulario--is-active");
    AOS.init({ duration: 800, once:true});
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  });
  botaoConfirmacao.addEventListener('click', ()=>{
    const mensagemSim = document.querySelector(".positivo");
    const mensagemNao = document.querySelector(".negativo");
    mensagemSim.classList.remove("positivo--is-active");
    mensagemNao.classList.remove("negativo--is-active");
    AOS.init({ duration: 800, once:true});
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  });
  const aniversario = new Date("Sep 17, 2025 20:00:00");
  const tempoAniversario = aniversario.getTime();

  function dias() {
    return 1000 * 60 ** 2 * 24;
  }
  function horas() {
    return 1000 * 60 ** 2;
  }
  function minutos() {
    return 1000 * 60;
  }
  const contandoHoras = setInterval(() => {
    let agora = new Date();
    let tempoAgora = agora.getTime();
    let diferenca = tempoAniversario - tempoAgora;
    document.querySelector("h1").innerHTML = `Faltam
        ${Math.floor(diferenca / dias())}d
        ${Math.floor((diferenca % dias()) / horas())}h
        ${Math.floor((diferenca % horas()) / minutos())}m
        ${Math.floor((diferenca % minutos()) / 1000)}s
        `;
    if (diferenca < 0) {
      clearInterval(contandoHoras);
      document.querySelector("p").innerHTML = "Expirado!";
    }
  }, 1000);
});
