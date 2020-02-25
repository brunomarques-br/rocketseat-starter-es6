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

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();