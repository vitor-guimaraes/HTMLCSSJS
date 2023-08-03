// Pega os parametros da URL
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Type: 'create' | 'edit'
const screenType = params.id ? 'edit' : 'create';

function createOrEdit() {
    // Inicia a massa de dados (payload)
    let payload = {
        title: document.querySelector("#title").value,
        totalCost: document.querySelector("#totalCost").value,
        description: document.querySelector("#description").value,
        idClient: "1"
    }

    // Enviar para API
    fetch(`https://64c99758b2980cec85c25154.mockapi.io/api/projects${screenType === 'edit' ? ('/' + params.id): ''}`, {
        method: screenType === 'edit' ? 'PUT' : 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        if(screenType === 'edit'){
            alert('Editado com sucesso!');
        } else {
            alert('Cadastrado com sucesso!');
        }
    })
}

window.onload = function(){
    setScreenTypeTexts()
}
    function setScreenTypeTexts(){    
    if(screenType == 'create'){
        document.querySelector('#main-title').innerText = 'Cadastrar novo projeto';
        document.querySelector('#action-button').innerText = 'Cadastrar';
    }

    if(screenType == 'edit'){
        document.querySelector('#main-title').innerText = 'Editar projeto';
        document.querySelector('#action-button').innerText = 'Salvar';
    }
}