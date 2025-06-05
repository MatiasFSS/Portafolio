import { useEffect } from "react";


export const useCarrusel = (id) => {
    useEffect(() => {
        const carouselElement = document.querySelector(`#${id}`);
        if (carouselElement) {
            // Inicializa el carrusel con las opciones deseadas
            const carousel = new bootstrap.Carousel(carouselElement, {
                interval: 4000,
                ride: 'carousel',
                pause: 'hover',
            });
        }
    }, []);

  return {

  }
}


