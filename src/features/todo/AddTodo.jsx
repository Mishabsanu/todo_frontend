import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/common/Button";

const AddTodo = ({ onAdd }) => {
  const todoSchema = Yup.object().shape({
    text: Yup.string()
      .min(3, "Task must be at least 3 characters")
      .required("Task is required"),
  });

  const initialValues = { text: "" };

  const handleFormSubmit = (values, { resetForm }) => {
    onAdd(values.text);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={todoSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-1 mb-6">
          <div className="flex flex-col sm:flex-row gap-2">
            <Field
              name="text"
              placeholder="Add your task... 📝"
              className={`flex-1 border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 text-gray-800 placeholder-gray-400 ${
                errors.text && touched.text
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-pink-400"
              }`}
            />

            <Button
              type="submit"
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:brightness-110 text-white px-5 py-2 rounded-md shadow-md transition-all"
            >
              Add
            </Button>
          </div>
          <ErrorMessage
            name="text"
            component="div"
            className="text-red-500 text-sm"
          />
        </Form>
      )}
    </Formik>
  );
};

export default AddTodo;
