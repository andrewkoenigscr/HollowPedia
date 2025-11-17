document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('infoModal');
    const btn = document.getElementById('infoButton');
    const span = document.getElementById('fecharModal');

    // Verifica se os elementos existem antes de adicionar eventos
    if (modal && btn && span) {
        
        // Função para abrir
        const abrirModal = () => {
            // Usa flex para garantir a centralização definida no CSS
            modal.style.display = 'flex';
            // Acessibilidade: move o foco para o botão de fechar
            span.focus();
        };

        // Função para fechar
        const fecharModal = () => {
            modal.style.display = 'none';
            // Acessibilidade: devolve o foco ao botão que abriu
            btn.focus();
        };

        // Eventos de Clique
        btn.addEventListener('click', abrirModal);
        span.addEventListener('click', fecharModal);

        // Fecha ao clicar na parte escura (fora do modal)
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                fecharModal();
            }
        });

        // Acessibilidade: Fecha com a tecla ESC
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                fecharModal();
            }
        });
    }
});