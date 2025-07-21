import Header from "../Header";

const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-100 text-gray-900">
    <Header />
    {children}
  </div>
);

export default MainLayout;
