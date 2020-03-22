/*

AULA 1 - UTILIZACAO BASICA DO ASYNC AWAIT

const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Ok') }, 2000);
});

async function executaPromise() {

    // sempre que tivermos um 'await' a próxima linha será executada somente após a promise ser executada
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
}

executaPromise();

*/

/* 

AULA 2 - Utilizando AXIOS

// todas funções do axios, retornam 'promises' 
import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.warn('Erro na API');
        }
        
    }
}

Api.getUserInfo('brunomarques-br');

*/