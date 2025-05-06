const form = document.getElementById("formulario-contacto");
const mensajeExito = document.getElementById("mensaje-exito");

form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Previene el envío tradicional

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.reset(); // Limpia el formulario
            mensajeExito.style.display = "block"; // Muestra el mensaje de éxito

            // Oculta el mensaje luego de 5 segundos
            setTimeout(() => {
                mensajeExito.style.display = "none";
            }, 5000);
        } else {
            alert("Hubo un error al enviar el mensaje.");
        }
    } catch (error) {
        alert("Error de red o conexión con el servidor.");
    }
});