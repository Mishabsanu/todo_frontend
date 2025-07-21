import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (!todos.length)
    return (
      <p className="text-center text-gray-400 italic mt-4">No tasks yet!</p>
    );

  return (
    <ul className="space-y-3">
      {[...todos].reverse().map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
