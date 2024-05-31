function adicionarTexto() {
    var texto = document.getElementById("entrada").value;
        var lista = document.getElementById("lista");
        var novoItem = document.createElement("li");
        novoItem.textContent = texto;
        lista.appendChild(novoItem);
    }
