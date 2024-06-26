import React from 'react';
import '../hojas-de-estilo/Boton.css'; // Importa los estilos del botón

function Boton(props) {
  // Función para verificar si el valor es un operador
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children} {/* Muestra el valor del botón */}
    </div>
  );
}

export default Boton;
