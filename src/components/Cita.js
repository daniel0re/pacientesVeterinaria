import React from 'react'
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => {

    const { mascota, propietario, fecha, hora, sintomas, id } = cita;

    return (
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(id)}
            >Eliminar</button>
        </div>
    );
}
Cita.prototype = {
    eliminarCita: PropTypes.func,
    cita: PropTypes.object.isRequired
 }
export default Cita;