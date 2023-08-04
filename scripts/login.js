function checkIfAnyRoleIsChecked(){
    let list = document.getElementsByName("role");
    let counter = 0;
    console.log("primeiro counter:", counter)

    for(let radioButton of list){
        if(radioButton.checked === false){
            counter++;
        }
    }

    console.log("segundo counter:", counter)
    return counter !== list.length;
}

function cadastrar() {
    // Checa se alguma role foi checada.
    if(checkIfAnyRoleIsChecked() === false){
        alert('Marque alguma role!');
        return;
    }

    // Inicia a massa de dados (payload)
    let payload = {
        role: document.getElementsByName("role")[0].checked == true ? 'dev' : 'cliente',
        fullName: document.querySelector("#fullName").value,
        birthdate: document.querySelector("#birthdate").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    }

    // Enviar para API
    fetch("https://64c99758b2980cec85c25154.mockapi.io/api/users", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        alert('Cadastrado com sucesso!');

        localStorage.setItem("userName", response.fullName);
        localStorage.setItem("role", response.role === "dev" ? "Desenvolvedor" : "Cliente");
        localStorage.setItem("idClient", response.id);

        window.location.href = "list.html";
    })

}