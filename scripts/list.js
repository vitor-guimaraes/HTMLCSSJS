let list = [];

window.onload = function () {
    document.querySelector("#name").innerText = localStorage.getItem("userName");
    document.querySelector("#role").innerText = localStorage.getItem("role");

    getProjects();
}

function getProjects(){
      // Enviar para API
      fetch("https://64c99758b2980cec85c25154.mockapi.io/api/projects")
        .then(response => response.json())
        .then(response => {
            list = response
            buildTable();
        })
}

function goToEdit(id){
    window.location.href = `project-create-edit.html?id=${id}`;
}

function deleteProject(id){
    fetch(`https://64c99758b2980cec85c25154.mockapi.io/api/projects/${id}`, {
        method:'DELETE'
    })
    .then(response => response.json())
    .then(response => {
        list = list.filter(project => project.id !== id);

        buildTable();

    })
}

function buildTable(){
    document.querySelector("#table-body").innerHTML = '';

    list.forEach(el => {
        let template = `
            <div class="row">
                <div class="title-description">
                    <h6 class="title">${el.title}</h6>
                    <p class="description">${el.description}</p>
                </div>
                <div class="price">R$ ${el.totalCost}</div>
                <div class="actions">
                    <span class="edit material-icons" onClick="goToEdit(${el.id})">edit</span>
                    <span class="delete material-icons" onClick="deleteProject(${el.id})">delete_outline</span>
                </div>
            </div>
        `

        document.querySelector("#table-body").insertAdjacentHTML("beforeend", template)
    });
}