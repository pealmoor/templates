// Seleccionar elementos
const userAvatar = document.querySelector('.user-avatar');
const userDropdown = document.querySelector('.user-dropdown');

// Mostrar/ocultar el menú desplegable al hacer clic en el avatar
userAvatar.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevenir que el evento se propague al documento
    userDropdown.classList.toggle('hidden'); // Alternar la clase "hidden"
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    if (!userDropdown.contains(event.target) && !userAvatar.contains(event.target)) {
        userDropdown.classList.add('hidden'); // Asegurar que el menú se oculte
    }
});

function toggleCard(card) {
    card.classList.toggle('flipped');
}

document.addEventListener("DOMContentLoaded", () => {
    const calculateNotesBtn = document.getElementById("calculate-notes-btn");
    const additionalTable = document.getElementById("additional-table");
    const calculateAverageBtn = document.getElementById("calculate-average-btn");
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    // Mostrar la tabla adicional al hacer clic en "Calcular Notas"
    calculateNotesBtn.addEventListener("click", () => {
        additionalTable.classList.toggle("hidden");
    });

    // Calcular el promedio basado en las notas ingresadas
    calculateAverageBtn.addEventListener("click", () => {
        const partial1 = parseFloat(document.getElementById("partial1").value) || 0;
        const partial2 = parseFloat(document.getElementById("partial2").value) || 0;
        const partial3 = parseFloat(document.getElementById("partial3").value) || 0;
        const finalExam = parseFloat(document.getElementById("final").value) || 0;

        const average = (partial1 + partial2 + partial3 + finalExam) / 4;
        document.getElementById("average").textContent = average.toFixed(2);
    });

    // Mostrar/Ocultar el menú desplegable de notas
    dropdownButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const dropdownMenu = e.target.nextElementSibling;
            dropdownMenu.classList.toggle("hidden");
        });
    });
});

function showInfo(type) {
    const infoContainer = document.getElementById("university-info");

    // Limpiar el contenedor antes de agregar nueva información
    infoContainer.innerHTML = '';

    if (type === 'mision') {
        infoContainer.innerHTML = `
            <h4>Misión</h4>
            <p>El Programa de Ingeniería de Sistemas de la UFPS está comprometido en la formación integral de profesionales competentes en el Desarrollo y Gestión de Sistemas de Información, caracterizados por una sólida fundamentación en las áreas de las ciencias de la computación e informática, enmarcado en un Proyecto Educativo fundamentado en el mejoramiento continuo de los procesos misionales; basados en los principios de excelencia académica, con responsabilidad y compromiso con los procesos de transformación de la región y del país; contando con docentes de calidad y con una adecuada infraestructura física y tecnológica.</p>
        `;
    } else if (type === 'vision') {
        infoContainer.innerHTML = `
            <h4>Visión</h4>
            <p>En el año 2027, el Programa de Ingeniería de Sistemas de la UFPS alcanzará niveles de alta calidad, enmarcados en procesos continuos de mejoramiento, líder en la formación de profesionales competentes en el Desarrollo y Gestión de Sistemas de Información, comprometidos con el desarrollo de la región y del país, afrontando las situaciones cambiantes del medio. Apoyados en una estructura curricular flexible, con un equipo administrativo idóneo, con docentes de calidad, con una adecuada infraestructura física y tecnológica.</p>
        `;
    } else if (type === 'programa') {
        infoContainer.innerHTML = `
            <h4>Programa Académico</h4>
            <p>El Programa de Ingeniería de Sistemas de la Universidad Francisco de Paula Santander recibió licencia de funcionamiento emanada del ICFES según el Acuerdo 277 de 19 diciembre de 1985 y fue aprobado mediante Resolución No. 001791 de Julio de 1991, emanada del Instituto Colombiano de Fomento de la Educación Superior ICFES. Se encuentra debidamente registrado en el Sistema Nacional de Información de dicha Entidad con el No. 120940030000055400111100.</p>
            <p>Según Acuerdo 045 de Julio 15 de 1996 del Consejo Superior de la UFPS se renovó la aprobación para el Programa. En el año 2005 se obtuvo registro calificado por 7 Años. En el año 2012 se obtuvo la renovación del registro calificado por 7 años, mediante la Resolución No. 10178 del 06 de septiembre de 2012 del M.E.N.</p>
        `;
    }
}

