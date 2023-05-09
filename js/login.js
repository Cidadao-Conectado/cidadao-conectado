const botao = document.getElementById("botao_login");

botao.addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const user = localStorage.getItem(email);
   
    if (user == null){        
        alert("Usuário não encontrado!");
    }else {
        alert("Login efetuado com sucesso!");
        const url = document.URL.replace("login.html", "escolher_cadastro.html");
        window.location.href = url;
    }
});


