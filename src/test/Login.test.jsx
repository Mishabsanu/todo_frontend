import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Login from "../pages/Login";


const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));


jest.mock("../context/AuthContext", () => ({
  useAuth: jest.fn(),
}));

describe("Login Page", () => {
  const mockLogin = jest.fn();

  beforeEach(() => {
    useAuth.mockReturnValue({ login: mockLogin });
    mockLogin.mockClear();
    mockNavigate.mockClear();
  });

  const renderComponent = () =>
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

  it("renders input and button", () => {
    renderComponent();
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("shows validation error when input is empty", async () => {
    renderComponent();
    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeInTheDocument();
    });
  });

  it("calls login and navigates on valid input", async () => {
    renderComponent();
    const input = screen.getByPlaceholderText("Enter your name");
    fireEvent.change(input, { target: { value: "Mishab" } });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith("Mishab");
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });
});
