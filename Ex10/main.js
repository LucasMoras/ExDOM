function reverterLista() {
    var lista = document.getElementById('itemLista');
    var itens = Array.from(lista.children);
    itens.reverse();
    lista.innerHTML = '';
    itens.forEach(function(item) {
    lista.appendChild(item);
});
}