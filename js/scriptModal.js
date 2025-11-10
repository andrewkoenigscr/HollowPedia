function inicializarModal() {
    const modal = document.getElementById("infoModal");
    const btn = document.getElementById("infoBtn");
    const span = document.getElementById("closeModal");

    // Abre o modal
    btn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Fecha o modal ao clicar no X
    span.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fecha o modal ao clicar fora dele
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Fecha com tecla Esc
    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
}

// Espera o DOM carregar antes de rodar
document.addEventListener("DOMContentLoaded", inicializarModal);

function configurarModal() {
    const botao = document.getElementById('infoButton');
    const modal = document.getElementById('infoModal');
    const fechar = document.getElementById('fecharModal');

    botao.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    fechar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fecha ao clicar fora da janela
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    configurarModal();
    carregarConteudoInicio(); // chama também a função anterior
});
