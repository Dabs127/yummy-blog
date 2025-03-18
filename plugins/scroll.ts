export default defineNuxtPlugin(() => {
  if (typeof window !== "undefined") {
    const isScrolled = useState<boolean>("isScrolled", () => false);

    let lastPositionY: number = window.scrollY;
    let hasScrolled: boolean = false;

    // Función de throttle personalizada
    const throttle = (func: Function, limit: number) => {
      let inThrottle: boolean = false;
      return function (this: any, ...args: any[]) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    };

    // Función que maneja el scroll
    const handleScroll = () => {
      // Determina si el usuario está bajando o subiendo
      isScrolled.value = lastPositionY - window.scrollY <= 0;

      // If the scroll is near from the top the value will always be false
      if(window.scrollY < 120) {
        isScrolled.value = false
      }

      // Solo actualiza lastPositionY una vez para evitar cambios rápidos
      if (!hasScrolled) {
        lastPositionY = window.scrollY; // Guarda la posición cuando empieza a hacer scroll
        // console.log("Saving lastPositionY:", lastPositionY);
        hasScrolled = true;

        setTimeout(() => {
          hasScrolled = false;
        }, 350); // Reinicia el flag después de 500ms
      }

      // console.log(isScrolled.value, lastPositionY, window.scrollY);
    };

    // Aplicando el throttle al manejador de scroll (limitado a cada 100ms)
    const throttledHandleScroll = throttle(handleScroll, 100);

    // Se agrega el listener de scroll
    window.addEventListener("scroll", throttledHandleScroll);
  }
});
