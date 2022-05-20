   document.getElementById("formulariocontacto").addEventListener('submit', validarFormulario); 
    
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    var apellido = document.getElementById('apellido').value;
    if (apellido.length == 0) {
      alert('No has escrito nada en el apellido');
      return;
    }
      var email = document.getElementById('email').value;
    if (email.length == 0) {
      alert('No has escrito nada en el email');
      return;}
      var mensaje = document.getElementById('mensaje').value;
      if (mensaje.length == 0) {
        alert('No has escrito nada en el mensaje');
        return;}
        this.submit();
    }
    

