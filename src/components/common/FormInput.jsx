import { useField } from "formik";

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={props.id || props.name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        className={`border px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 ${
          isError
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-300 focus:ring-indigo-400"
        }`}
        {...field}
        {...props}
      />
      {isError && <p className="text-red-500 text-sm mt-1">{meta.error}</p>}
    </div>
  );
};

export default FormInput;
