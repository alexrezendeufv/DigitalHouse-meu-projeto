
//let lista = dadosDosUsuarios2.map((cliente) => {return {id:cliente.id, nome: cliente.nome, email:cliente.email}})

// o .map sempre vai sair um array
// o return pode retornar um array e tbm pode retornar um objeto

/*let b = [[ 2, 'Bruno Bezerra', 'bruno@bezerra.com' ],
    [ 4, 'Raul', 'raul@globo.com' ],
    [ 5, 'Alexandre de Moraes', 'xandao@stf.org' ],
    [ 123, 'Raul das Flores', 'raul@dasflores.com' ],
    [ 125, 'Teste Testando', 'teste@teste.com' ],
    [ 126, 'Raul da silva Santana', 'adsasdasd' ],
    [ 127, 'asdasd', 'asdasd' ],
    [ 128, 'Teste', 'ttt' ],
    [ 129, 'asdasd', 'asdasda' ] 
] --> quando o return é um array*/ 

/*[
    { id: 2, nome: 'Bruno Bezerra', email: 'bruno@bezerra.com' },
    { id: 4, nome: 'Raul', email: 'raul@globo.com' },
    { id: 5, nome: 'Alexandre de Moraes', email: 'xandao@stf.org' },
    { id: 123, nome: 'Raul das Flores', email: 'raul@dasflores.com' },
    { id: 125, nome: 'Teste Testando', email: 'teste@teste.com' },
    { id: 126, nome: 'Raul da silva Santana', email: 'adsasdasd' },
    { id: 127, nome: 'asdasd', email: 'asdasd' },
    { id: 128, nome: 'Teste', email: 'ttt' },
    { id: 129, nome: 'asdasd', email: 'asdasda' }
] --> quando o return é um objeto*/ 


//console.table(lista)

/*let idUsuario=process.argv[2]

if(dadosDosUsuarios2.find( u => u.id == idUsuario) == undefined) {
    console.log('Usuario não encontrado')
    process.exit()
}

let usuarioAchado=dadosDosUsuarios2.find( u => u.id == idUsuario)
console.log(usuarioAchado)
console.log(usuarioAchado.nome)
console.log(usuarioAchado.email)
console.table(usuarioAchado.enderecos)
console.table(usuarioAchado.formasDePagamento) */
//functionlistarNomes(){
    
    //   const retornaNome = usuario=> { return usuario.nome}
    //   let nomesDosUsuarios = retornaNome.map(retornaNome)
    //   console.table(nomesDosUsuarios)
    //}
    //let lista = dadosDosUsuarios2.map((cliente) => {return {nome:cliente.nome}})
    //console.table(lista)
    //meu jeito
    //functionlistarNomes(){
        
        //   let lista = dadosDosUsuarios2.map((cliente) => {return {nome:cliente.nome}})
        //   console.table(lista)
        
        //}
        // jeito resumido 
        //function listarNomes(){
            //   console.table(dadosDosUsuarios2.map(u => {return {nome:u.nome}}))
            //}
            
            //listarNomes()

//const func = (u =>  u.nome.includes(inicial) == true)
const dadosDosUsuarios2 = require('./databases/usuarios.json')
    
function buscar(inicial){
    console.table(dadosDosUsuarios2.filter(u =>  u.nome.includes(inicial) == true)) 
}       
buscar('no')