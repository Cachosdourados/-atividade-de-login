function login(){
    const username =document.getElementById("username").value;
    const password= document.getElementById("password").value;

    // Exemplo simples apenas pra ilustração:
    if (username ==="teste@gmail.com" && password === "senha" ) {
        alert("login bem vindo !!!!!!");

    } else{
        alert ("Credenciais inválidas.Tente novamente.");
    }
}