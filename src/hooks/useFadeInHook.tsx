"use client"
import { useEffect, useRef, useState } from 'react';
import { useInView, IntersectionOptions } from 'react-intersection-observer';

interface UseFadeInHookOptions {
  threshold?: number | number[];
}

const useFadeInHook = ({ threshold }: UseFadeInHookOptions = {}) => {
  // Configura las opciones del hook useInView.
  const options: IntersectionOptions = {
    triggerOnce: true,
    threshold: threshold || 0.8, // Usa el threshold proporcionado o un valor predeterminado de 0.8
  };

  // Obtiene la referencia (ref) y el estado de visibilidad (inView) del hook useInView.
  const [ref, inView] = useInView(options);
  const [isVisible, setIsVisible] = useState(false);

  // Ref para referenciar al nodo del DOM que se animará (opcional y puede omitirse si no es necesario).
  const fadeInRef = useRef<HTMLDivElement | null>(null);

  // useEffect se ejecuta cuando cambia el valor de inView.
  useEffect(() => {
    // Actualiza el estado de visibilidad cuando el componente entra en la vista.
    if (inView) {
      setIsVisible(true);
      // Desvincular la referencia del elemento cuando está en la vista
      fadeInRef.current = null;
    }
  }, [inView]);

  // Devuelve la referencia (ref), el estado de visibilidad (isVisible) y la referencia al nodo del DOM (fadeInRef).
  return { ref, isVisible, fadeInRef };
};

export default useFadeInHook;