import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTodo from "../features/todo/AddTodo";

describe("AddTodo Component", () => {
  test("renders input and button", () => {
    render(<AddTodo onAdd={jest.fn()} />);
    expect(screen.getByPlaceholderText(/add your task/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  test("shows validation error when input is empty", async () => {
    render(<AddTodo onAdd={jest.fn()} />);
    await userEvent.click(screen.getByRole("button", { name: /add/i }));
    expect(await screen.findByText("Task is required")).toBeInTheDocument();
  });

  test("shows validation error when input is too short", async () => {
    render(<AddTodo onAdd={jest.fn()} />);
    await userEvent.type(screen.getByPlaceholderText(/add your task/i), "Hi");
    await userEvent.click(screen.getByRole("button", { name: /add/i }));
    expect(
      await screen.findByText(/at least 3 characters/i)
    ).toBeInTheDocument();
  });

  test("calls onAdd with input value and resets form", async () => {
    const mockAdd = jest.fn();
    render(<AddTodo onAdd={mockAdd} />);
    const input = screen.getByPlaceholderText(/add your task/i);

    await userEvent.type(input, "Buy Milk");
    await userEvent.click(screen.getByRole("button", { name: /add/i }));

    expect(mockAdd).toHaveBeenCalledWith("Buy Milk");

    expect(input).toHaveValue("");
  });
});
