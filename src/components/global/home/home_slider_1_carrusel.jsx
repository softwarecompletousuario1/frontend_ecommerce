import React, {useState} from 'react';
// import Styles from '../../../styles/pages/home/home_slider_1_carrusel.css';
// import { Image } from '@astrojs/image/components';

const Carrusel = () => {
  const imagenes_carrusel = [
    'https://res.cloudinary.com/unidigital/image/upload/v1696605197/software%20completo/promo_isfjtt.png',
    'https://http2.mlstatic.com/D_NQ_885299-MLA71946536612_092023-OO.webp',
    'https://http2.mlstatic.com/D_NQ_827915-MLA72037073590_102023-OO.webp',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const imagenActual = imagenes_carrusel[currentIndex];

  const anteriorFuncion = () =>{
    alert("botonAntetior");
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

  console.log(imagenActual);
  return (
    <div >
      <div>
        <img src={imagenActual} alt="Imagen del carrusel" />
        <button onClick={anteriorFuncion}>Anterior</button>
        <button onClick={siguienteFuncion}>Siguiente</button>
      </div>
    </div>
  );
};

export default Carrusel;