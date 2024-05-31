function adicionarItem() {
    var item = document.getElementById("item");
    var lista = document.getElementById("lista");
    var novoItem = document.createElement("li");
    novoItem.textContent = item.value;
    lista.appendChild(novoItem);
}