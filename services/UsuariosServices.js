const dadosDosUsuarios = require('../databases/usuarios.json')
const fs = require('fs')
function listar(){
    // Seu código aqui
    let lista = dadosDosUsuarios.map((cliente) => {return {id:cliente.id, nome:cliente.nome, email:cliente.email}})
    console.table(lista)
}   

function salvar(arrayDeUsuarios){
    // Seu código aqui
    fs.writeFileSync('./databases/usuarios.json',JSON.stringify(arrayDeUsuarios,null,4))
}

function cadastrar(objeto){
// Seu código aqui
    const bcrypt = require('bcrypt')
    let newObjeto = {
            id: dadosDosUsuarios[dadosDosUsuarios.length-1].id + 1,
            nome: objeto.nome,
            email: objeto.email,
            senha: objeto.senha, //bcrypt.hash(objeto.senha,5),
            enderecos: [objeto.endereco],
            formasDePagamento: []
    }
    dadosDosUsuarios.push(newObjeto)
    salvar(dadosDosUsuarios)
}

function detalhar(idUsuario){
// Seu código aqui

let usuarioAchado=dadosDosUsuarios.find( u => u.id == idUsuario)

console.log(`nome: ${usuarioAchado.nome}`)
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
    let arraysemUsuario=dadosDosUsuarios.filter(u => u.id != idDoUsuarioParaRemover)
    salvar(arraysemUsuario)
    
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
    
    //let array =[]
    //for(let i=0;i<dadosDosUsuarios.length;i++){
    //    array.push(dadosDosUsuarios[i].id)//)
    //}
    let index = dadosDosUsuarios.findIndex(u=> u.id == idUsuario)

    dadosDosUsuarios[index].nome = novosDados.nome
    dadosDosUsuarios[index].email =  novosDados.email    
    dadosDosUsuarios[index].senha =  novosDados.senha
    salvar(dadosDosUsuarios)
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
    let index = dadosDosUsuarios.findIndex(u=> u.id == idUsuario)
    dadosDosUsuarios[index].enderecos.push(novoEndereco)
    salvar(dadosDosUsuarios)

}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
    let index = dadosDosUsuarios.findIndex(u=> u.id == idUsuario)
    dadosDosUsuarios[index].enderecos.splice(posicaoDoEndereco,1)
    salvar(dadosDosUsuarios)
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui    

}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
    let index = dadosDosUsuarios.findIndex(u=> u.id == idUsuario)
    dadosDosUsuarios[index].formasDePagamento.push(novaFormaDePagamento)
    salvar(dadosDosUsuarios)
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
    let index = dadosDosUsuarios.findIndex(u=> u.id == idUsuario)
    dadosDosUsuarios[index].formasDePagamento.splice(posicaoDoEndereco,1)
    salvar(dadosDosUsuarios)
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