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