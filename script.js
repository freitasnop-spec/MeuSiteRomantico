let telaAtual = 1;


function mostrarTela(numero) {

    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    const tela = document.getElementById("tela" + numero);

    tela.classList.add("ativa");

    telaAtual = numero;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function proximaTela() {

    if (telaAtual < 6) {
        mostrarTela(telaAtual + 1);
    }

}


function respostaSim() {

    const resposta = document.getElementById("resposta");

    resposta.textContent =
        "Eu sabia que você diria sim... ❤️";

    criarCoracoes();

    setTimeout(function() {
        mostrarTela(6);
    }, 1200);

}


function respostaNao() {

    const botaoNao = document.getElementById("botaoNao");

    const resposta = document.getElementById("resposta");

    botaoNao.remove();

    resposta.textContent =
        "opss, não temos outra opção bobinha 🫣️😏️ ";

}


function criarCoracoes() {

    const area = document.querySelector(".coracoes");

    for (let i = 0; i < 20; i++) {

        const coracao = document.createElement("div");

        coracao.classList.add("coracao-flutuante");

        coracao.textContent = "❤️";

        coracao.style.left =
            Math.random() * 100 + "%";

        coracao.style.fontSize =
            (15 + Math.random() * 25) + "px";

        coracao.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        area.appendChild(coracao);

        setTimeout(function() {
            coracao.remove();
        }, 7000);

    }

}