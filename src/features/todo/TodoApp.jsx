import { useState } from "react";
import { useUserLocalStorage } from "../../hooks/useUserLocalStorage";
import AddTodo from "./AddTodo";
import Filter from "./Filter";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useUserLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen  w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#F3E8FF] rounded-xl shadow p-6 text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
            My Task List
          </h1>
          <p className="text-[#5B21B6] text-base sm:text-lg">
            Organize, complete, and track your tasks easily
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <AddTodo onAdd={addTodo} />
          <Filter current={filter} onChange={setFilter} />
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
