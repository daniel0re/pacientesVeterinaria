import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
function App() {
    // Citas en local storage
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (!citasIniciales) {
        citasIniciales = [];
    }
    // Arreglo de citas
    const [citas, setCita] = useState(citasIniciales);

    // use Effect para realizar ciertas operaciones cuando el state cambia
    useEffect(() => {
        let citasIniciales = JSON.parse(localStorage.getItem('citas'));
        if (citasIniciales) {
            localStorage.setItem('citas', JSON.stringify(citas));
        } else {
            localStorage.setItem('citas', JSON.stringify([]));
        }
    }, [citas]);

    // Funciones que tome las sitas actuales y agrege las nueva
    const crearCita = cita => {
        setCita([...citas, cita]);
    }

    const eliminarCita = id => {
        const nuevaLista = citas.filter(cita => cita.id !== id);
        setCita(nuevaLista);
    }

    // Mensaje condicional
    const titulo = citas.length === 0 ? 'Agrega una cita' : 'Administra tus citas';

    return (
        <Fragment>
            <h1>Administrador de Pacientes</h1>

            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario crearCita={crearCita} />
                    </div>
                    <div className="one-half column">
                        <h2>{titulo}</h2>
                        {
                            citas.map(cita => (
                                <Cita
                                    key={cita.id}
                                    cita={cita}
                                    eliminarCita={eliminarCita}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
