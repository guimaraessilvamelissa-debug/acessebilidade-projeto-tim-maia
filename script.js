// ===== ACESSIBILIDADE =====
const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
const btnAumentarFonte = document.getElementById('aumentar-fonte');
const btnDiminuirFonte = document.getElementById('diminuir-fonte');
const btnContraste = document.getElementById('alterna-contraste');

let tamanhoFonte = 16; // px base

// Abrir / fechar menu de acessibilidade
botaoAcessibilidade.addEventListener('click', () => {
    const estaAberto = opcoesAcessibilidade.hasAttribute('hidden') === false;
    
    if (estaAberto) {
        opcoesAcessibilidade.setAttribute('hidden', '');
        botaoAcessibilidade.setAttribute('aria-expanded', 'false');
    } else {
        opcoesAcessibilidade.removeAttribute('hidden');
        botaoAcessibilidade.setAttribute('aria-expanded', 'true');
    }
});

// Aumentar fonte
btnAumentarFonte.addEventListener('click', () => {
    if (tamanhoFonte < 24) {
        tamanhoFonte += 2;
        document.body.style.fontSize = `${tamanhoFonte}px`;
    }
});

// Diminuir fonte
btnDiminuirFonte.addEventListener('click', () => {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = `${tamanhoFonte}px`;
    }
});

// Alternar contraste
btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});