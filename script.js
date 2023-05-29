const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const mensajeEncriptado = document.querySelector(".mensajeEncriptado");
const botoncopiar = document.querySelector(".botoncopiar");
/*const copia = document.querySelector(".copiar");*/

function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value)
  mensaje.value = textoEncriptado;
  textArea.value ="";
  mensaje.style.backgroundImage= "none";
  mensajeEncriptado.style.display= "none";
  botoncopiar.style.display= "flex";
 
}

function encriptar(stringEncriptada){
 let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase()

 for(let i = 0; i < matrizCodigo.length; i++){
  if(stringEncriptada.includes(matrizCodigo[i][0])){
    stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
  }
 }
 return stringEncriptada
}

function btnDesencriptar(){
  const textoEncriptado = desencriptar(textArea.value)
  mensaje.value = textoEncriptado;
  textArea.value ="";
}

function desencriptar(stringDesencriptada){
    /*let muneco = document.getElementById(muneco)*/
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
          stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        } 
}
return stringDesencriptada
}

function btncopiar(){
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = "";
  alert("Texto Copiado")

}

/*function copiar(){
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = "";
  alert("Texto Copiado")
}*/

