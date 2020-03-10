/*
    Caso queira alterar o nome do objeto sem definição de 'export default'
    deve ser criado um 'alias' após o nome do objeto como exemplo abaixo.
*/
import multiplicacao, { soma, subtracao as subtracaoAB } from './functions';

/*
    Nesse tipo de import, pode ser definido abertamente o nome do objeto
    visto que foi declarado somente uma funcao default na classe.js
*/
import somaFunction from './soma';

console.log(soma(1, 2));
console.log(subtracaoAB(4, 2));
console.log(somaFunction(4, 5));
console.log(multiplicacao(2, 5));