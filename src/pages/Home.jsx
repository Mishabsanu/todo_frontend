import TodoApp from "../features/todo/TodoApp";

const Home = () => {
  return (
    <div className="w- min-h-2 bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        <TodoApp />
      </div>
    </div>
  );
};

export default Home;
