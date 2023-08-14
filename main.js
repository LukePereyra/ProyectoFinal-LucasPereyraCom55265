document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;
    const horario = document.getElementById('horario').value;

    const datosReserva = {
        nombre: nombre,
        edad: edad,
        telefono: telefono,
        fecha: fecha,
        horario: horario
    };
    
    localStorage.setItem('turnoData', JSON.stringify(datosReserva));

    alert('¡Tu turno ha sido reservado! Esperamos verte pronto para tu momento de relajación en TU ESPACIO.');
    form.reset();
    });

    const storedDataJSON = localStorage.getItem('turnoData');
    if (storedDataJSON) {
    const storedData = JSON.parse(storedDataJSON);
    llenarFormulario(storedData);
    }

    function llenarFormulario(data) {
    document.getElementById('nombre').value = data.nombre;
    document.getElementById('edad').value = data.edad;
    document.getElementById('telefono').value = data.telefono;
    document.getElementById('fecha').value = data.fecha;
    document.getElementById('horario').value = data.horario;
    }
});


// creo que cumpli la consigna, intenté primero aplicar librerías, me volvi loco, no lo casé mucho, me faltaria hacer la tienda, pero no llego, asique espero que esto este bien, he hecho pruebas y he podido almacenar los datos del turno exitosamente en localStorage