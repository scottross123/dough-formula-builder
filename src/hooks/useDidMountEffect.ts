import { useEffect, useRef } from 'react';

const useDidMountEffect = (func: () => void, deps: any[]) => {
    const didMount = useRef(false);
    let counter = 0;

    useEffect(() => {
        if (didMount.current) {
            func();
            console.log("render: ", counter++)
        }
        else {
            didMount.current = true;
            console.log("first render")
        }
    }, deps);
}

export default useDidMountEffect;