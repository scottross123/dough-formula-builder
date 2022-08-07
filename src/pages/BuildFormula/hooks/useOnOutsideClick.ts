import {RefObject, useEffect, useRef} from "react";

export const useOnOutsideClick = (ref: any, handler: () => void)  => {
    const listener = (e: Event) => {
        const target = e.target as Element;
        if (!ref.current?.contains(e.target as Node) && !(target.className === 'flourInput')) {
            handler();
        }
    }

    useEffect(() => {
        document.addEventListener('click', listener, true);
        return () => {
            document.removeEventListener('click', listener, true)
        }
    }, []);
}