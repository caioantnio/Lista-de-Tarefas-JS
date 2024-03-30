//Botão enviar
function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    // Redirecionamento
    if(login == 'Admin' && senha == '123'){
        location.href = "menu.html";
    }
    else{
        alert('Usuário ou senha incorretos.')
    }

}

function logout(){
    alert('Login efetuado com sucesso.')
    location.href = "index.html";
}