import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Loading", () => () => <div>Loading...</div>);
jest.mock("./components/ErrorBoundary", () => {
  return ({ children }) => <>{children}</>;
});
jest.mock("./context/AuthContext", () => {
  return {
    AuthProvider: ({ children }) => <>{children}</>,
  };
});
jest.mock("./routes/AppRouter", () => () => <div>Mocked AppRouter</div>);

describe("App Component", () => {
  it("renders App with AppRouter", () => {
    render(<App />);
    expect(screen.getByText("Mocked AppRouter")).toBeInTheDocument();
  });
});
