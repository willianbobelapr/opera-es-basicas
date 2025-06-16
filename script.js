// Variáveis globais
let display = document.getElementById('display');
let expressao = '';

// Função para adicionar números ao display
function adicionarNumero(numero) {
    expressao += numero;
    atualizarDisplay();
}

// Função para adicionar operadores
function adicionarOperador(operador) {
    if (expressao !== '' && !isOperador(expressao[expressao.length - 1])) {
        expressao += operador;
        atualizarDisplay();
    }
}

// Função para adicionar ponto decimal
function adicionarPonto() {
    if (expressao === '' || isOperador(expressao[expressao.length - 1])) {
        expressao += '0.';
    } else if (!expressao.includes('.')) {
        expressao += '.';
    }
    atualizarDisplay();
}

// Função para limpar o display
function limpar() {
    expressao = '';
    atualizarDisplay();
}

// Função para apagar o último caractere
function apagar() {
    expressao = expressao.slice(0, -1);
    atualizarDisplay();
}

// Função para verificar se um caractere é operador
function isOperador(caractere) {
    return ['+', '-', '*', '/'].includes(caractere);
}

// Função para atualizar o display
function atualizarDisplay() {
    display.value = expressao;
}

// Função para calcular o resultado
function calcular() {
    try {
        // Substitui o símbolo de multiplicação para o eval funcionar
        let expressaoParaCalcular = expressao.replace('×', '*');
        
        // Calcula o resultado
        let resultado = eval(expressaoParaCalcular);
        
        // Verifica se o resultado é válido
        if (isNaN(resultado) || !isFinite(resultado)) {
            throw new Error('Resultado inválido');
        }
        
        // Atualiza a expressão e o display com o resultado
        expressao = resultado.toString();
        atualizarDisplay();
    } catch (erro) {
        expressao = 'Erro';
        atualizarDisplay();
        setTimeout(limpar, 1000);
    }
} 