const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
