function adicionar(e) {
    e.preventDefault();
    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var media = (nota1 + nota2) / 2;
    var situacao = media >= 5 ? "Aprovado" : "Reprovado";
    var linha = linhanova(nome, matricula, nota1, nota2, media, situacao);
    maislinha(linha);
    limpar();
    
}

function linhanova(nome, matricula, nota1, nota2, media, situacao) {
    var linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${matricula}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${media.toFixed(2)}</td>
        <td>${situacao}</td>
    `;
    return linha;
}

function maislinha(linha) {
    var tbody = document.querySelector('#tabela tbody');
    tbody.appendChild(linha);
}

function limpar() {
    document.getElementById('nome').value = '';
    document.getElementById('matricula').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
}

function limparTabela() {
    var tbody = document.querySelector('#tabela tbody');
    tbody.innerHTML = '';
}

document.getElementById('formulario').addEventListener('submit', adicionar);
document.getElementById('limparTabela').addEventListener('click', limparTabela);