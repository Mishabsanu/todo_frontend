
const Filter = ({ current, onChange }) => {
  const filters = ["all", "completed", "pending"];

  return (
    <div className="flex gap-3 justify-center mb-6">
      {filters?.map((type) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 shadow-md
            ${
              current === type
                ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filter;
