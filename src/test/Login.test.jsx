import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/Login";
import * as storageUtils from "../utils/storage";


const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));


beforeEach(() => {
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.getItem = jest.fn();
});

describe("Login Page", () => {
  it("renders input and button", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText(/enter your name/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("shows validation error when username is empty", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });
  });

  it("stores username in localStorage and navigates", async () => {
    const spy = jest.spyOn(storageUtils, "setToStorage");

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/enter your name/i);
    const button = screen.getByRole("button", { name: /login/i });

    fireEvent.change(input, { target: { value: "Mishab" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith("loggedInUser", "Mishab");
      expect(spy).toHaveBeenCalledWith("todos_Mishab", []);
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });
});
