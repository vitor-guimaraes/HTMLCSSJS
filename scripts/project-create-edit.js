window.onload = function(){
    const screenType = 'edit';
    
    if(screenType == 'create'){
        document.querySelector('#main-title').innerText = 'Cadastrar novo projeto';
        document.querySelector('#action-button').innerText = 'Cadastrar';
    }

    if(screenType == 'edit'){
        document.querySelector('#main-title').innerText = 'Editar projeto';
        document.querySelector('#action-button').innerText = 'Salvar';
    }
}

function cadastrar() {
    // Inicia a massa de dados (payload)
    let payload = {
        title: document.getElementsByName("title"),
        totalCost: document.querySelector("#totalCost").value,
        description: document.querySelector("#description").value,
        idClient: "1"
    }

    // Enviar para API
    fetch("https://64c99758b2980cec85c25154.mockapi.io/api/projects", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        alert('Cadastrado com sucesso!');
    })

}