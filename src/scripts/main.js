document.addEventListener("DOMContentLoaded", function () {
  const botaoFormulario = document.getElementById("button-form");
  botaoFormulario.addEventListener("click", (e) => {
    const formulario = document.querySelector(".formulario");
    e.preventDefault();
    formulario.classList.remove("formulario--is-active");
    AOS.init({ duration: 800, once: false });
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  });
  const botaoConfirmacao = document.getElementById("botao-confirmacao");
  const retorno = document.querySelector(".retorno");
  const retornoSim = document.querySelector(".retorno__positivo--is-ok");
  const retornoNao = document.querySelector(".retorno__negativo--is-no");
  const entradas = document.querySelectorAll("input");
  const selecao = document.getElementById("presenca");
  const fieldset = document.getElementById("formulario-fieldset");
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
      retorno.classList.remove("retorno--is-active");
      retornoNao.classList.remove("retorno__negativo--is-no");
      retornoSim.classList.add("retorno__positivo--is-ok");
      AOS.init({ duration: 800, once: false });
      setTimeout(() => {
        AOS.refresh();
      }, 150);
    } else {
      retorno.classList.remove("retorno--is-active");
      retornoNao.classList.add("retorno__negativo--is-no");
      retornoSim.classList.remove("retorno__positivo--is-ok");
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
