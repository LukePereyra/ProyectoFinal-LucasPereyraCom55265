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

// vamos con el carrito, elegi hacerlo en un mismo js para que no me cambie el orden de ejecucion de las funciones,POR LAS DUDAS QUE TODO SE ROMPA.

const carrito = [];

function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    mostrarCarrito();
    calcularTotal();
}

function mostrarCarrito() {
    const carritoLista = document.getElementById('carrito');
    carritoLista.innerHTML = '';

    carrito.forEach(producto => {
        const itemCarrito = document.createElement('li');
        itemCarrito.innerText = `${producto.nombre} - $${producto.precio}`;
        carritoLista.appendChild(itemCarrito);
    });
}

function calcularTotal() {
    const totalElement = document.getElementById('total-a-pagar');
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    totalElement.textContent = total.toFixed(2);
}

const botonesAgregar = document.querySelectorAll('.agregar-btn');
botonesAgregar.forEach(btn => {
    btn.addEventListener('click', agregarProducto);
});

function agregarProducto(event) {
    const btn = event.target;
    const nombre = btn.getAttribute('data-nombre');
    const precio = parseFloat(btn.getAttribute('data-precio'));

    agregarAlCarrito(nombre, precio);
}

const finalizarCompraBtn = document.getElementById('finalizar-compra');
finalizarCompraBtn.addEventListener('click', function() {
    const formularioPago = document.getElementById('formulario-pago');
    const carritoDiv = document.getElementById('carrito');

    carritoDiv.style.display = 'none';   // pude implementar que el form aparezca cuando se clickea en finalizar compra, pero aun no he logrado darle estilo, o adecuarlo al demas codigo para que quede lindo, me centre mas en la funcionalidad
    formularioPago.style.display = 'block';
});

const botonPagar = document.getElementById('botonPagar');

botonPagar.addEventListener('click', function() {
    Swal.fire({
        icon: 'success',
        title: 'Bien ahí papá',
        text: 'Tu pedido fue registrado',
        showConfirmButton: true,
    });
});




// preferi usar el onclick en html que hacer un addEventListener, no se si eso sera muy buena practica pero me facilito a la hora de escribir js
