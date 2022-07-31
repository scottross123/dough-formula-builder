import { FormEvent, useState } from "react";

type useInputProps = {
    initialValue: string,
}

const useInput = (props: useInputProps) => {
    const { initialValue } = props;
    const [value, setValue] = useState(initialValue);

    const handleValueChange = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    return { value, handleValueChange }
}

export default useInput;