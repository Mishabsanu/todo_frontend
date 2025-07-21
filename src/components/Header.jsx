import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout(); 
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-4 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">My ToDo</h1>
        <div className="flex items-center space-x-4">
          {user?.username && (
            <span className="text-white text-sm font-medium">
              Hello, <span className="font-semibold">{user.username}</span>
            </span>
          )}
          <button
            onClick={handleLogout}
            className="bg-white text-indigo-600 hover:bg-indigo-100 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
