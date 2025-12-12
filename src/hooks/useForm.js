import { useState } from "react";

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const {id, value} = e.target;
        setValues(prev =>({
            ...prev,
            [id]: value
        }));
    };

    const resetForm = () => {
    setValues(initialValues);
    };

    return [values, handleChange, resetForm];

};