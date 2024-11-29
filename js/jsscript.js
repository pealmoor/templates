<script>
    // Función para obtener los horarios de un estudiante específico
    async function fetchHorarios(estudianteId) {
        try {
            const response = await fetch(`http://localhost:8000/api/horarios/${estudianteId}/`);
            if (!response.ok) {
                throw new Error('Error al obtener los horarios');
            }
            const horarios = await response.json();
            renderTable(horarios);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Función para renderizar la tabla de horarios
    function renderTable(horarios) {
        const tableBody = document.getElementById('schedule-body');
        tableBody.innerHTML = ''; // Limpiar contenido previo
        horarios.forEach(horario => {
            const row = `
                <tr>
                    <td>${horario.estudiante}</td>
                    <td>${horario.materia}</td>
                    <td>${horario.salon}</td>
                    <td>${horario.dia}</td>
                    <td>${horario.hora_inicio} - ${horario.hora_fin}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

    // Llamar a la función cuando la página cargue, pasando el ID del estudiante
    document.addEventListener('DOMContentLoaded', () => {
        const estudianteId = 1;  // Este valor debería ser dinámico, tal vez obtenido de la sesión de usuario o la URL
        fetchHorarios(estudianteId);
    });
</script>
