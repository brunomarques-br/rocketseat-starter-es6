// ##################################################################################################

/* 

    ** AULA #3 ** - Trabalhando com Arrays

*/

const arr = [1, 2, 3, 4, 5, 6];

//map - percorrer todos os items de um vetor e executar todos os passos que a function implementa.
const newArr = arr.map(function (item, index) {
    return item * 2 + " - Posição do array: " + index;
})

console.log(newArr);

// reduce - consumir todo o vetor e transforma-lo em uma única variável (soma total dos valores)
const sum = arr.reduce(function(total, next){
    return total + next;
})

console.log(sum);

// filter - utilizado para filtrar os valores de um array
const filter = arr.filter(function(item){
    return item % 2 === 0 ; // filta todos os números pares.
})

console.log(filter);

// find - utilizado para buscar um valor específico dentro de um array
const find = arr.find(function(item){
    return item === 4;
})

console.log(find);

// ##################################################################################################

/*

    ** AULA #2 ** - Utilizando const e let

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

*/

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