const inputTarefa = document.querySelector('.input-nova-tarefa');
const bntTarefa = document.querySelector('.bnt-add-tarefa');
const ul = document.querySelector('.tarefas');

const inputTarefaValid = () => {
    const inputIsValid = inputTarefa.value.trim();
    if (!inputIsValid) return
    criaTarefa(inputTarefa.value);
    linpaInput();
};

const criaBntApagar = (li) => {
    li.innerHTML += ' ';
    const bntApagar = document.createElement('button');
    bntApagar.innerHTML = 'Apagar';
    bntApagar.setAttribute('class','apagar');
    bntApagar.setAttribute('title','Apagar está tarefa');
    li.appendChild(bntApagar);
}

const linpaInput = () => {
    inputTarefa.value = '';
    inputTarefa.focus();
};

const criaLi = () => {
    const li = document.createElement('li');
    return li;
};

inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13){
        inputTarefaValid();
    }
});

const criaTarefa = (textoInput) => {
    const li = criaLi();
    li.innerHTML = textoInput;
    criaBntApagar(li);
    ul.appendChild(li);
    salvarTarefas();
};

bntTarefa.addEventListener('click', () => {
   inputTarefaValid();
});

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    };
});

const salvarTarefas = () => {
    const liTarefas = ul.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    };

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
};

const addTarefasSalvas = () => {
    const tarefas = localStorage.getItem('tarefas');
    const tarefasJSONPasrse = JSON.parse(tarefas);

    for (let tarefa of tarefasJSONPasrse){
        criaTarefa(tarefa);
    };
};

addTarefasSalvas();