document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "123" && password === "123") {
        alert("Bem-vindo! Login bem-sucedido.");
        window.location.href = "src/pages/Home/index.html";
    } else {
        alert("Credenciais inválidas. Por favor, tente novamente.");
    }

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});