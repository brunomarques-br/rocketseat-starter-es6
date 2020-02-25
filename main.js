// ##################################################################################################

/* 

    ** AULA #2 ** - Utilizando const e let

*/

// Uma vez definido uma constante, seu valor não poderá ter seu valor reatribuído durante a execução. 
const a = 1;

// Aqui é possível, pois estamos trabalhando com mutação de objeto, ou seja, alterando valores dentro dele.
const usuario = {nome: 'Bruno Marques'}
usuario.nome = 'Bruno Andrade';

// Variáveis de escopo (let), são variáveis locais. podem se repetir.
function Teste(x){
    let y = 2;
    if(x > 5){
        console.log(x, y);
    }
}

Teste(10);

// ##################################################################################################

/* 

    ** AULA #1 ** - Trabalhando com  Classes e Herança

class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(data);
    }
}

class TodoList extends List {
    constructor() {
        super();
        this.usuario = 'Bruno Marques';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
    
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();

*/