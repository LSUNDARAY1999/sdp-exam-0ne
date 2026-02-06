

export function validateField(name, value, schema) {
    const field = schema.find((f) => f.name === name);

    if (field.required && !value) {
        return "This field is required";
    }

    if (field.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
            return "Enter a valid email address";
        }
    }

    if (field.type === "password" && value && value.length < 6) {
        return "Password must be at least 6 characters";
    }

    return "";
}