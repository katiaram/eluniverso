const cifrar = () => {
  let cadena = document.getElementById('tarea').value;
  let offset = parseInt(document.getElementById('offset').value);
  cadena = cadena.toUpperCase();
  let nuevaCadena = cipher.encode(offset, cadena);
  document.getElementById('resultado').value = nuevaCadena;
}
document.getElementById('boton-cifrar').addEventListener('click',cifrar);

const descifrar = () => {
  let cadena = document.getElementById('tarea').value;
  cadena = cadena.toUpperCase();
  let offset = parseInt(document.getElementById('offset').value);
  let nuevaCadena = cipher.decode(offset, cadena);
  document.getElementById('resultado').value = nuevaCadena;
}
document.getElementById('boton-descifrar').addEventListener('click',descifrar);
