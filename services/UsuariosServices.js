const dadosDosUsuarios = require('../databases/usuarios.json')
const fs = require('fs')
function listar(){
    // Seu código aqui
    let lista = dadosDosUsuarios.map((cliente) => {return {id:cliente.id, nome:cliente.nome, email:cliente.email}})
    console.table(lista)
}   

function salvar(arrayDeUsuarios){
    // Seu código aqui
    fs.writeFileSync('./databases/usuarios.json.bk',JSON.stringify(arrayDeUsuarios,null,4))
}

function cadastrar(objeto){
// Seu código aqui
    const bcrypt = require('bcrypt')
    let newObjeto = {
            id: dadosDosUsuarios[dadosDosUsuarios.length-1].id + 1,
            nome: objeto.nome,
            email: objeto.email,
            senha: bcrypt.hash(objeto.senha, 10 ),
            enderecos: [objeto.enderecos],
            formasDePagamento: []
    }
    dadosDosUsuarios.push(newObjeto)
    salvar(dadosDosUsuarios)
}

function detalhar(idUsuario){
// Seu código aqui

let usuarioAchado=dadosDosUsuarios.find( u => u.id == idUsuario)

console.log(`nome: ${usuarioAchado.nome} \n`)
console.log(`email: ${usuarioAchado.email} \n`)
console.log('Endereços')
console.table(usuarioAchado.enderecos)
console.log('\n')
console.log('Formas de Pagamento')
console.table(usuarioAchado.formasDePagamento)
     

}

function buscar(inicial){
    console.table(dadosDosUsuarios.filter(u =>  u.nome.includes(inicial) )) //== true)) // não precisa do true
}

function remover(idDoUsuarioParaRemover){
    // Seu código aqui
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

const UsuariosServices = {
    cadastrar,
    listar,
    salvar,
    detalhar,
    buscar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;