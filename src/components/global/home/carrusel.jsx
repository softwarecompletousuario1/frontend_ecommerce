import React from 'react';
// import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
// import Gallery from 'react-image-gallery';
// import { optimizeImages } from './optimizeImages'; 
// Función para optimizar imágenes

const images = [
  {
    src: 'imagen-original.jpg', // Ruta de la imagen original en formato JPG
    alt: 'Descripción de la imagen',
  },
  // Agrega más imágenes aquí
];

// const optimizedImages = optimizeImages(images);

function Carrusel() {
  return (
    <div>
      {/* <Gallery items={optimizedImages} /> */}

      Soy carrusel jsx
    </div>
  );
}

export default Carrusel;