import React, { useState } from 'react';

/**
 * Componente funcional para la bandera de Ecuador.
 */
const Flag: React.FC = () => {
  // Estados para gestionar el clic y los colores de las franjas.
const [clicked, setClicked] = useState(false);
  const [outerColor, setOuterColor] = useState('#CE1126');  // Rojo
  const [middleColor, setMiddleColor] = useState('#0033A0'); // Azul
  const [innerColor, setInnerColor] = useState('#FFD700');  // Amarillo

/**
   * Manejador del clic en la bandera.
   * Actualiza el estado 'clicked' y muestra un alert con los colores de las franjas.
   */
const handleClick = () => {
    setClicked(true);
    alert(`Color de la franja externa: ${"Amarillo💛"}}\nColor de la franja del medio: ${"Azul💙"}\nColor de la franja interna: ${"Rojo❤️"}`);
};

  // Estilo principal para el componente de la bandera.
const flagStyle: React.CSSProperties = {
    width: '350px',
    height: '250px',
    border: '1px solid #000',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

  // Estilo para la franja externa.
const outerStripeStyle: React.CSSProperties = {
    width: '350px',
    height: '250px',
    backgroundColor: innerColor,
    position: 'absolute',
    top: '0',
    transition: 'background-color 0.5s',
};

  // Estilo para la franja del medio.
const middleStripeStyle: React.CSSProperties = {
    width: '90%',
    height: '75%',
    backgroundColor: middleColor,
    position: 'absolute',
    top: '13%',
    left: '5%',
    transition: 'background-color 0.5s',
};

  // Estilo para la franja interna.
const innerStripeStyle: React.CSSProperties = {
    width: '70%',
    height: '50%',
    backgroundColor: outerColor,
    position: 'absolute',
    top: '25%',
    left: '15%',
    transition: 'background-color 0.5s',
};

  // Renderizado del componente.
return (
    <div style={flagStyle} onClick={handleClick}>
        <div style={outerStripeStyle}></div>
        <div style={middleStripeStyle}></div>
        <div style={innerStripeStyle}>Ecuador💚</div>
    </div>
);
};

export default Flag;
