import React, {useState} from 'react';

// import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
// import Gallery from 'react-image-gallery';
// import { optimizeImages } from './optimizeImages'; 
// Función para optimizar imágenes

const imagenes = [ 
  "https://res.cloudinary.com/unidigital/image/upload/v1696605197/software%20completo/promo_isfjtt.png",
  "https://http2.mlstatic.com/D_NQ_827915-MLA72037073590_102023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_741936-MLA72003433921_092023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_612942-MLA71945575734_092023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_885299-MLA71946536612_092023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_741936-MLA72003433921_092023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_741936-MLA72003433921_092023-OO.webp",
  "https://res.cloudinary.com/unidigital/image/upload/v1696605197/software%20completo/promo_isfjtt.png",
  "https://http2.mlstatic.com/D_NQ_827915-MLA72037073590_102023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_741936-MLA72003433921_092023-OO.webp",
];



// const optimizedImages = optimizeImages(images);

function Carrusel() {
  const [posicion, setPosicion] = useState(0);

  const anterior = () => {
    setPosicion(1)
  }
  return (
    <div>
      <img src={imagenes[posicion]} alt="" />
      <button onClick={anterior}> anterior</button>
    </div>
  );
}

export default Carrusel;