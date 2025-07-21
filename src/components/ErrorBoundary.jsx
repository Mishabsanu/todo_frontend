import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-600 text-center mt-10">
          Something went wrong.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
