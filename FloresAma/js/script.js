
/* =====================================================
   CREAR LAS FLORES DEL RAMO
===================================================== */

const ramo =
    document.getElementById("ramo-flores");


function crearFlorRamo() {

    const flor =
        document.createElement("div");

    flor.classList.add(
        "flor-ramo"
    );


    flor.innerHTML = `

        <div class="petalo p1"></div>

        <div class="petalo p2"></div>

        <div class="petalo p3"></div>

        <div class="petalo p4"></div>

        <div class="petalo p5"></div>

        <div class="petalo p6"></div>

        <div class="centro"></div>

    `;


    ramo.appendChild(flor);
}


/* =====================================================
   CREAR 20 FLORES
===================================================== */

for (
    let i = 0;
    i < 20;
    i++
) {

    crearFlorRamo();
}


/* =====================================================
   FLORES PEQUEÑAS QUE CAEN
===================================================== */

const contenedor =
    document.getElementById(
        "flores-caidas"
    );


function crearFlorCaida() {

    const flor =
        document.createElement("div");


    flor.classList.add(
        "flor-caida"
    );


    /* Posición horizontal */

    const posicion =
        Math.random() * 100;


    /* Tamaño */

    const tamaño =
        Math.random() * 12 + 8;


    /* Velocidad */

    const duracion =
        Math.random() * 5 + 5;


    /* Retraso */

    const retraso =
        Math.random() * 2;


    flor.style.left =
        posicion + "%";


    flor.style.width =
        tamaño + "px";


    flor.style.height =
        tamaño + "px";


    flor.style.animationDuration =

        duracion + "s, " +

        (
            Math.random() * 3 + 2
        ) + "s";


    flor.style.animationDelay =
        retraso + "s";


    contenedor.appendChild(
        flor
    );


    /* Eliminar cuando termina */

    setTimeout(
        () => {

            flor.remove();

        },

        (
            duracion +
            retraso
        ) * 1000
    );
}


/* =====================================================
   MUCHAS FLORES INICIALES
===================================================== */

for (
    let i = 0;
    i < 60;
    i++
) {

    setTimeout(
        () => {

            crearFlorCaida();

        },

        i * 120
    );
}


/* =====================================================
   CREAR FLORES CONTINUAMENTE
===================================================== */

setInterval(
    () => {

        crearFlorCaida();

    },

    220
);

