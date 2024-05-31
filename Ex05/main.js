function removerItem() {
    var lista = document.getElementById("lista");
    if (lista.lastChild) {
    lista.removeChild(lista.lastChild);
    }
}


