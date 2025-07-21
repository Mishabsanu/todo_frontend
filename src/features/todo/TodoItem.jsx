import { Trash2 } from "lucide-react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-4 rounded-lg shadow-md text-white transition">
      <label className="flex items-center gap-3 cursor-pointer w-full">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 accent-white cursor-pointer"
        />
        <span
          className={`text-base break-all ${
            todo.completed ? "line-through text-gray-200" : "text-white"
          }`}
        >
          {todo.text}
        </span>
      </label>

      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 hover:text-red-200 transition focus:outline-none"
        title="Delete Task"
      >
        <Trash2 size={22} />
      </button>
    </li>
  );
};

export default TodoItem;
