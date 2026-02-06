import FormField from "./FormField";
import { useFormState } from "../hooks/useFormState";

const formSchema = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "password", label: "Password", type: "password", required: true },
];

export default function FormBuilder() {
  const { values, errors, handleChange, handleSubmit } =
    useFormState(formSchema);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {formSchema.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={values[field.name]}
          error={errors[field.name]}
          onChange={handleChange}
        />
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Submit
      </button>
    </form>
  );
}