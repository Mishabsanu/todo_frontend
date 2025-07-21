
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-xl font-semibold text-purple-700">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
