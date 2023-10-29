document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("miFormulario");
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();


        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Su consulta se ha enviado correctamente.',
        });


        formulario.reset();
    });
});



