import { useState } from "react";
import { validateField } from "../utils/validateField";

export function useFormState(schema) {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        const error = validateField(name, value, schema);
        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        schema.forEach((field) => {
            const error = validateField(
                field.name,
                values[field.name],
                schema
            );
            if (error) newErrors[field.name] = error;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully!");
        }
    };

    return { values, errors, handleChange, handleSubmit };
}