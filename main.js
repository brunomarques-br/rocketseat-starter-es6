// ##################################################################################################

/* 

    ** AULA #7 ** - Operadores REST e SPREAD

*/

// REST Operator (...)

const usuario = {
    nome: 'Bruno',
    idade: 29,
    emrpesa: 'BS.io'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);


//outro exemplo utilizando array

const arr = [1, 2, 3, 4, 5, 6];
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

// utilizando para parametros de funcoes com arrrow functions

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4));

// SPREAD Operator -- Propagar o objeto de arrays para uma outra estrutura de dados.

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

// exemplo de alteração de dados
const usuario2 = { ...usuario, nome: 'Juão Paulo' };
console.log(usuario2);


// ##################################################################################################

/*

    ** AULA #6 ** - Desestruturação de valores

*

const usuario = {
    nome: 'Bruno',
    idade: 29,
    endereco: {
        cidade: 'Brasília',
        estado: 'DF',
    },
};

//imprimir todos os dados
console.log(usuario);

//obter dados específicos da forma padrão
const nome_ = usuario.nome;
const idade_ = usuario.idade;
const cidade_ = usuario.endereco.cidade;

//obter dados específicos usando desestruturação (Es6)

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(endereco);
console.log(cidade);

// usando desestruturação por parâmetros de funções enviando o objeto
function mostraUsuario({ nome, idade }) {
    console.log(nome, idade);
}

mostraUsuario(usuario);


// ##################################################################################################

/*

    ** AULA #5 ** - Valores Padrão

*

function soma(a, b) { return a + b }

console.log(soma(1)); //NaN
console.log(soma()); //NaN

// solução, inicializar as variáveis dentro de uma função, evitando assim o erro de Not a Number

const soma = (a = 3, b = 4) => a + b;

console.log(soma(1));
console.log(soma());




// ##################################################################################################

/*

    ** AULA #4 ** - Trabalhando com Arrow Functions

*

const arr = [1, 2, 3, 4, 5, 6];

// Reduz a verbosidade de uma função com uma linha somente.
// Geralmente utilizada para callback.
const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => {
    return 'teste';
}

console.log(teste());

const testeArr = () => [1, 2, 3, 4, 5];

console.log(testeArr);

const testeObjeto = () => ({ nome: 'Bruno' });

console.log(testeObjeto);

// ##################################################################################################

/*

    ** AULA #3 ** - Trabalhando com Arrays

*

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

/*

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