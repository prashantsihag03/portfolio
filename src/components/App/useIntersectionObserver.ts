import React from "react";

/**
 * Hook to observe a component for intersection. 
 */
const useIntersectionObserver = (observer: IntersectionObserver) => {
    const [element, setElement] = React.useState<HTMLElement | null>(null);

    React.useEffect(() => {
      let observedElement: HTMLElement | null = null;
      if (element) {
        observedElement = element;
        observer.observe(observedElement);
      }
  
      return () => {
        if (observedElement) {
          observer.unobserve(observedElement);
        }
      }
    }, [element]);

    return {element, setElement}
}

export default useIntersectionObserver;