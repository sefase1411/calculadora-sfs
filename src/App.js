import './App.css'; // Importa los estilos de la aplicación
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'; // Importa el logo de freeCodeCamp
import Boton from './componentes/Boton'; // Importa el componente Boton
import Pantalla from './componentes/Pantalla'; // Importa el componente Pantalla
import BotonClear from './componentes/BotonClear'; // Importa el componente BotonClear
import { useState, useEffect } from 'react'; // Importa hooks de React
import { evaluate } from 'mathjs'; // Importa la función evaluate de mathjs para evaluar expresiones matemáticas

function App() {
  // Declara el estado 'input' y su función para actualizarlo 'setInput'
  const [input, setInput] = useState('');

  // Función para agregar valores al estado 'input'
  const agregarInput = val => {
    setInput(input + val);
  };

  // Función para calcular el resultado de la expresión matemática en 'input'
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input)); // Evalúa la expresión y actualiza 'input' con el resultado
    } else {
      alert("Por favor ingrese valores para realizar los cálculos."); // Muestra una alerta si 'input' está vacío
    }
  };

  // Función para manejar las teclas del teclado
  const handleKeyPress = (event) => {
    const { key } = event;
    if (/[0-9+\-*/.]/.test(key)) {
      agregarInput(key); // Agrega el valor de la tecla presionada si es un número u operador
    } else if (key === 'Enter') {
      calcularResultado(); // Calcula el resultado si se presiona Enter
    } else if (key === 'Backspace') {
      setInput(input.slice(0, -1)); // Elimina el último carácter si se presiona Backspace
    } else if (key === 'Escape') {
      setInput(''); // Limpia el input si se presiona Escape
    }
  };

  // Hook useEffect para añadir y remover el evento de teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress); // Añade el evento de teclado
    return () => {
      window.removeEventListener('keydown', handleKeyPress); // Remueve el evento de teclado al desmontar el componente
    };
  }, [input]); // Se ejecuta cada vez que 'input' cambia

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/> {/* Componente Pantalla que muestra el input */}
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}> {/* Botón para limpiar el input */}
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
