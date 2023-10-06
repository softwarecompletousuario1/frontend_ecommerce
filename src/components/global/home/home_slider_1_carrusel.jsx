import React, {useState} from 'react';
import Styles from '../../../styles/pages/home/home_slider_1_carrusel.css'


const Carrusel = () => {
  const imagenes_carrusel = [
    'https://http2.mlstatic.com/D_NQ_829080-MLA72001750577_092023-OO.webp',
    'https://http2.mlstatic.com/D_NQ_885299-MLA71946536612_092023-OO.webp',
    'https://http2.mlstatic.com/D_NQ_827915-MLA72037073590_102023-OO.webp',
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  console.log(imagenes_carrusel.length)
  const imagenActual = imagenes_carrusel[currentIndex];

  const anteriorFuncion = () =>{
    if (currentIndex <= 0){
      setCurrentIndex(0);
    }else{
      setCurrentIndex(currentIndex-1);
    }
  }

  const siguienteFuncion = () =>{
    if (currentIndex >=  (imagenes_carrusel.length-1)){
      setCurrentIndex(imagenes_carrusel.length-1);
    }else{
      setCurrentIndex(currentIndex+1);
    }
  }

  return (
    <div className={Styles.content_slider_1_carrusel}>
      <div>
      <img src={imagenActual} alt="Imagen del carrusel" />
      <button onClick={anteriorFuncion}>Anterior</button>
      <button onClick={siguienteFuncion}>Siguiente</button>
    </div>
    </div>
  );
};

export default Carrusel;