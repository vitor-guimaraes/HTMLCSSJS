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