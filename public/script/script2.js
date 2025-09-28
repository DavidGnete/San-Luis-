document.getElementById('reservas').addEventListener('submit', function(e){
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let llegada = document.getElementById('llegada').value;
    let salida = document.getElementById('salida').value;
    let cantidad = document.getElementById('personas').value;
    let habitacion = document.getElementById('habitacion').value;

    let mensaje = `Hola mi nombre es ${nombre}. Quiero reservar una habitacion ${habitacion} para ${cantidad} personas, desde ${llegada} hasta ${salida}.¿Esta disponible?`;

    let numero ="573108006524";
    let url=`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
    window.open(url, "_blank");
});


