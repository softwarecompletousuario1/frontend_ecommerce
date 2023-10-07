import fs from 'fs';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

// Ruta de la imagen original
const imagePath = 'ruta/de/la/imagen/original.jpg';

// Ruta de salida para la imagen optimizada en formato WebP
const outputPath = 'ruta/de/salida/imagen/webp.webp';

async function optimizeImageToWebP(inputPath, outputPath) {
  try {
    // Optimiza la imagen a WebP
    const result = await imagemin([inputPath], {
      destination: outputPath,
      plugins: [
        imageminWebp({ quality: 75 }) // Configura la calidad WebP
      ]
    });

    console.log('Imagen optimizada a WebP con éxito:', result[0].destinationPath);
  } catch (error) {
    console.error('Error al optimizar la imagen:', error);
  }
}

// Llama a la función para optimizar la imagen
optimizeImageToWebP(imagePath, outputPath);