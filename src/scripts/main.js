document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".formulario");
  const selecao = document.getElementById("presenca");
  const mensagemSim = document.querySelector(".positivo");
  const mensagemNao = document.querySelector(".negativo");
  const entradas = document.querySelectorAll("input");
  const botaoConfirmacao = document.getElementById("botao-confirmacao");
  const botao = document.getElementById("button-form");
  const fieldset = document.getElementById("formulario-fieldset");
  console.log(fieldset);
  botao.addEventListener("click", (e) => {
    e.preventDefault();
    formulario.classList.remove("formulario--is-active");
    AOS.init({ duration: 800, once: false });
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  });

  botaoConfirmacao.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        entradas[0].value === "" ||
        entradas[1].value === "" ||
        selecao.value === ""
    ) {
        alert(
            "Por favor, preencha todos os campos antes de confirmar sua presença."
        );
        return;
    }
    
    if (selecao.value === "nao") {
        mensagemNao.classList.remove("negativo--is-active");
        mensagemSim.classList.add("positivo--is-active");
        AOS.init({ duration: 800, once: false });
        setTimeout(() => {
            AOS.refresh();
        }, 150);
    } else {
        mensagemSim.classList.remove("positivo--is-active");
        mensagemNao.classList.add("negativo--is-active");
        
        AOS.init({ duration: 800, once: false });
        setTimeout(() => {
            AOS.refresh();
        }, 150);
    }
    fieldset.disabled = true;
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
      document.querySelector("h1").innerHTML = "Expirado!";
    }
  }, 1000);
});
