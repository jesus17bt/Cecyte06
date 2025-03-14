document.getElementById("opinionForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir que el formulario se envíe de forma convencional

    let maestro = document.getElementById("maestro").value;
    let comentario = document.getElementById("comentario").value;
    let calificacion = document.getElementById("calificacion").value;

    if (maestro && comentario && calificacion) {
        alert("Gracias por tu opinión sobre " + maestro);
        // Aquí puedes hacer una solicitud para guardar la opinión en la base de datos
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

document.getElementById("voteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let voto = document.getElementById("voto").value;
    alert("Gracias por votar por " + voto);
    // Aquí se podría enviar la votación a la base de datos
});

document.getElementById("projectForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let fileInput = document.getElementById("proyectoImagen");
    if (fileInput.files.length > 0) {
        alert("Proyecto subido correctamente.");
        // Aquí podrías enviar el archivo a un servidor
    } else {
        alert("Por favor, selecciona un archivo para subir.");
    }
});
