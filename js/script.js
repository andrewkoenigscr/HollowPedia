/* Requisitos atendidos neste arquivo:
   1. Uso de variáveis e funções.
   2. Manipulação do DOM.
   3. Validação de formulário com feedback visual.
   4. Funcionalidade de Saudação Dinâmica (Manipulação de String/Date).
*/

document.addEventListener("DOMContentLoaded", () => {
    initFormularioCadastro();
    initSaudacaoDinamica();
});

// --- FUNCIONALIDADE 1: Validação de Formulário ---
function initFormularioCadastro() {
    const form = document.getElementById('cadastroForm');
    const successMsg = document.getElementById('successMsg');

    // Se o formulário não existir nesta página, encerra a função
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão
        
        let isValid = true;
        
        // Captura os campos
        const nomeInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');
        const senhaInput = document.getElementById('senha');
        const nascimentoInput = document.getElementById('nascimento');
        const termosInput = document.getElementById('termos');
        const termosError = document.getElementById('termosError');

        // Função auxiliar para mostrar/esconder erro
        const toggleError = (input, show) => {
            const span = input.nextElementSibling; // Pega o span.error-message logo após o input
            if (span && span.classList.contains('error-message')) {
                span.style.display = show ? 'block' : 'none';
            }
            if (show) {
                input.classList.add('input-error');
            } else {
                input.classList.remove('input-error');
            }
        };

        // 1. Validação Nome
        if (nomeInput.value.trim() === "") {
            toggleError(nomeInput, true);
            isValid = false;
        } else {
            toggleError(nomeInput, false);
        }

        // 2. Validação Email
        if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
            toggleError(emailInput, true);
            isValid = false;
        } else {
            toggleError(emailInput, false);
        }

        // 3. Validação Senha
        if (senhaInput.value.length < 8) {
            toggleError(senhaInput, true);
            isValid = false;
        } else {
            toggleError(senhaInput, false);
        }

        // 4. Validação Data
        if (nascimentoInput.value === "") {
            toggleError(nascimentoInput, true);
            isValid = false;
        } else {
            toggleError(nascimentoInput, false);
        }

        // 5. Validação Checkbox
        if (!termosInput.checked) {
            termosError.style.display = 'block';
            isValid = false;
        } else {
            termosError.style.display = 'none';
        }

        // Se tudo estiver válido
        if (isValid) {
            // Retorno visual ao usuário (Simula o envio)
            const nomeUsuario = nomeInput.value;
            
            // Esconde o formulário
            form.style.display = 'none';
            
            // Exibe mensagem de sucesso personalizada
            if (successMsg) {
                successMsg.style.display = 'block';
                successMsg.innerHTML = `
                    <h3>Bem-vindo a Hallownest, ${nomeUsuario}!</h3>
                    <p>Seu cadastro foi realizado com sucesso.</p>
                    <p>Que o Rei Pálido guie seu caminho.</p>
                    <button onclick="location.reload()" style="margin-top:15px; padding:10px; cursor:pointer;">Voltar</button>
                `;
            }
        }
    });
}

// --- FUNCIONALIDADE 2: Saudação Dinâmica baseada na hora ---
function initSaudacaoDinamica() {
    const header = document.querySelector('header h1');
    
    // Só executa se achou o h1 e estamos na página inicial (opcional)
    if (!header) return;

    const horaAtual = new Date().getHours();
    let saudacao = "";

    // Lógica condicional
    if (horaAtual >= 5 && horaAtual < 12) {
        saudacao = "Bom dia, Viajante";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        saudacao = "Boa tarde, Viajante";
    } else {
        saudacao = "Boa noite, Viajante";
    }

    // Cria um elemento pequeno de saudação abaixo do H1
    const saudacaoElem = document.createElement('p');
    saudacaoElem.textContent = saudacao;
    saudacaoElem.style.fontSize = "14px";
    saudacaoElem.style.color = "#82aaff";
    saudacaoElem.style.marginTop = "-5px";
    saudacaoElem.style.marginBottom = "15px";
    
    // --- CORREÇÃO: Centralização ---
    saudacaoElem.style.textAlign = "center"; // Centraliza o texto
    saudacaoElem.style.width = "100%";       // Garante que ocupe a largura toda
    saudacaoElem.style.display = "block";    // Garante comportamento de bloco
    
    // Insere no DOM logo após o H1
    header.after(saudacaoElem);
}