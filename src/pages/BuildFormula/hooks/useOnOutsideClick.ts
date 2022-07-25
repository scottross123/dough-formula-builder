import {RefObject, useEffect, useRef} from "react";

export const useOnOutsideClick = (ref: any, handler: () => void)  => {
    const listener = (e: Event) => {
        if (!ref.current?.contains(e.target as Node)) {
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