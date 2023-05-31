function criptografar() {
  var texto = document.getElementById("textinput").value.toLowerCase();
  var txtcifrado = texto.replace(/e/igm,"enter");
  txtcifrado = txtcifrado.replace(/o/igm,"ober");
  txtcifrado = txtcifrado.replace(/i/igm,"imes");
  txtcifrado = txtcifrado.replace(/a/igm,"ai");
  txtcifrado = txtcifrado.replace(/u/igm,"ufat");
  
  document.getElementById("love-img").style.display = "none";
  document.getElementById("texto-quadro").style.display = "none";
  document.getElementById("copiar").style.display = "block";
  document.getElementById("texto-quadro2").innerHTML = txtcifrado;
  document.getElementById("textinput").value = "";
}

function descriptografar() {
  var texto = document.getElementById("textinput").value.toLowerCase();
  var txtcifrado = texto.replace(/enter/igm,"e");
  txtcifrado = txtcifrado.replace(/ober/igm,"o");
  txtcifrado = txtcifrado.replace(/imes/igm,"i");
  txtcifrado = txtcifrado.replace(/ai/igm,"a");
  txtcifrado = txtcifrado.replace(/ufat/igm,"u");

  document.getElementById("love-img").style.display = "none";
  document.getElementById("texto-quadro").style.display = "none";
  document.getElementById("copiar").style.display = "block";
  document.getElementById("texto-quadro2").innerHTML = txtcifrado;
  document.getElementById("textinput").value = "";
}

function copiar() {
  var direita = document.querySelector("#texto-quadro2");
  direita.select();
  document.execCommand('copy');
  alert("Copiado!");
}