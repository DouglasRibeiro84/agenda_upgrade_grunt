const form = document.getElementById('formulario');
const totalNumeros = []

let linhas = ``

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarLinha()
    atualizaTabela()
    contaLinhasTabela()
    
})

function adicionarLinha(){
    const nome = document.getElementById('nome')
    const telefone = document.getElementById ('telefone')

    totalNumeros.push(parseFloat(nome.value))

    let linha = `<tr>`
    linha += `<td>${nome.value}</td>`
    linha += `<td>${telefone.value}</td>`
    linha += `</tr>`
    linhas += linha

    nome.value = ``
    telefone.value = ``
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function contaLinhasTabela() {
    let tabela = document.getElementById('tabela');
    let linhas2 = tabela.getElementsByTagName('tr');

    const final = document.getElementById('quantidade')
    final.innerHTML = linhas2.length
}