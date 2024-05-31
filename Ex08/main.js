function caixa() {

var checkbox = document.getElementById("checkbox");
var paragraph = document.getElementById("msg");

if (checkbox.checked) {
  paragraph.innerText = "Checkbox marcada";

 } else {
  paragraph.innerText = "Checkbox desmarcada";

 }
}