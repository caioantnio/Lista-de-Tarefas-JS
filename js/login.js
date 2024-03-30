function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == 'Caio' && senha == '123'){
        location.href = "menu.html";
    }
    else{
        alert('Usuário ou senha incorretos.')
    }

}

function logout(){
    alert('Logou efetuado com sucesso.')
    location.href = "index.html";
}