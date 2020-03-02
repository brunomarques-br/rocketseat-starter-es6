"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ##################################################################################################

/* 

    ** AULA #7 ** - Operadores REST e SPREAD

*/
// REST Operator (...)
var usuario = {
  nome: 'Bruno',
  idade: 29,
  emrpesa: 'BS.io'
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(resto); //outro exemplo utilizando array

var arr = [1, 2, 3, 4, 5, 6];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c); // utilizando para parametros de funcoes com arrrow functions

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 3, 4)); // SPREAD Operator -- Propagar o objeto de arrays para uma outra estrutura de dados.

var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
var arr3 = [].concat(arr1, arr2);
console.log(arr3); // exemplo de alteração de dados

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Juão Paulo'
});

console.log(usuario2); // ##################################################################################################

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
