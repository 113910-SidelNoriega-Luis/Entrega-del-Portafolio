const arrowsContainer = document.querySelector('.flechas');

for (let i = 0; i < 5; i++) {
    const arrowDiv = document.createElement('div');
    arrowDiv.classList.add('arrow');
    arrowDiv.style.setProperty('--delay', i);
    arrowsContainer.appendChild(arrowDiv);
}

const habilidades = [
    { nombre: 'C#', imagen: 'Imagenes/c-sharp.png' },
    { nombre: '.NET', imagen: 'Imagenes/Microsoft_.NET_logo.svg.png' },
    { nombre: 'HTML', imagen: 'Imagenes/html.png' },
    { nombre: 'CSS', imagen: 'Imagenes/css-3.png' },
    { nombre: 'JavaScript', imagen: 'Imagenes/js.png' },
    { nombre: 'Java', imagen: 'Imagenes/java.png' },
    { nombre: 'Sql Server', imagen: 'Imagenes/sql-server.png' },
    { nombre: 'Mongo DB', imagen: 'Imagenes/mongo-db-design-mongodb-logo-mongodb.png' },
    { nombre: 'Postgre Sql', imagen: 'Imagenes/Postgresql_elephant.svg.png' },
    { nombre: 'Bootstrap', imagen: 'Imagenes/bootstrap.png' },
    { nombre: 'Jquery', imagen: 'Imagenes/70142.png' },
    { nombre: 'Swagger', imagen: 'Imagenes/descarga.png' }
];

const divCardsHabilidades = document.getElementById('divCardsHabilidades');

habilidades.forEach((habilidad) => {
    const card = document.createElement('div');
    card.classList.add('card', 'cardHabilidades');

    const img = document.createElement('img');
    img.src = habilidad.imagen;
    img.classList.add('card-img-top', 'mx-auto', 'my-3');
    img.style.width = '100px';
    img.style.height = '100px';

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = habilidad.nombre;

    card.appendChild(img);
    card.appendChild(cardTitle);

    divCardsHabilidades.appendChild(card);
});

$("#Env").click(function () {
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var bandera = true;

    if (nombre === "" || email === "") {
        bandera = false;
        Swal.fire({
            icon: 'error',
            title: 'Completa todos los campos',
            showConfirmButton: false,
            timer: 1500
        });
    }

    if (bandera) {
        Swal.fire({
            icon: 'success',
            title: 'Enviado',
            showConfirmButton: false,
            timer: 1500
        });
    }
});