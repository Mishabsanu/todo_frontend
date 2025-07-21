import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../components/common/Button";
import FormInput from "../components/common/FormInput";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .trim()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be less than 20 characters"),
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const username = values.username;
    login(username);
    navigate("/");
  };
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2">
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex items-center justify-center p-10">
        <div className="text-center z-10">
          <h1 className="text-5xl font-bold mb-4">My ToDo</h1>
          <p className="text-lg font-light">
            Manage your daily goals with ease.
          </p>
        </div>
        <div className="hidden md:block absolute right-0 top-0 h-full w-24 overflow-hidden">
          <svg
            className="h-full w-full text-white"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M100,0 C60,50 60,50 100,100 L100,0 Z" />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-2 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-purple-600 text-transparent bg-clip-text">
              Welcome
            </span>{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-600 text-transparent bg-clip-text">
              Back!
            </span>
          </h2>

          <p className="text-sm text-gray-600 text-center mb-6">
            Please login with your name and enjoy managing your daily tasks
            easily.
          </p>

          <Formik
            initialValues={{ username: "" }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormInput
                name="username"
                type="text"
                placeholder="Enter your name"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:brightness-110 mt-4 w-full shadow-md"
              >
                Login
              </Button>
            </Form>
          </Formik>

          <div className="mt-6 text-center text-sm text-gray-500 italic">
            “The secret of getting ahead is getting started.” – Mark Twain
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
