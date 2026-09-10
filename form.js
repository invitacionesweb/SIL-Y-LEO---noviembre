const scriptUrl = 'https://script.google.com/macros/s/AKfycbxu_cQXOi68HsYATajvEv8_mIIuB7nyLwrrsMLORlN8H2GkzEKkrEuwVAQNXxegkkYK/exec';
const form = document.forms['asistenciaform'];

form.addEventListener('submit', e => {
  e.preventDefault();

  Swal.fire({
    title: 'Enviando...',
    text: 'Por favor, esperá un momento',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
    .then(response => {
      Swal.fire({
        title: "¡MUCHAS GRACIAS!",
        text: "Formulario Enviado",
        icon: "success"
      });
    })
    .then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1500); // da tiempo a leer el mensaje
    })
    .catch(error => {
      Swal.fire("Error", "Ups!, No se pudo enviar el formulario. Intentá de nuevo.", "error");
      console.error('Error', error.message);
    });
});
