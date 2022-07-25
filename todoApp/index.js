const lista = document.querySelector("#listatarea");

const urllistartarea = "http://localhost:3000/tasks";

const button_get = document.querySelector("#button_get");

button_get.onclick = traerApi;

async function traerApi() {
  try {
    const response = await fetch(urllistartarea);
    const { total, tasks } = await response.json();

    imprimirLista(tasks);
  } catch (error) {
    console.log(error);
  }
}

const imprimirLista = (tasks) => {
  tasks.forEach((task) => {
    lista.innerHTML += `
        <li class="list-group-item">${task.text}</li>
    `;
  });
};
