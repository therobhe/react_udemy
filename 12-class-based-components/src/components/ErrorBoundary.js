import { Component } from "react";

// in the moment no equivalent in functional components
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  // implements the class to be a error boundary
  // will be triggered when a child component throws an error
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError)
      return (
        <div>
          <h1>Something went wrong.</h1>
        </div>
      )
    return this.props.children;
  };
}

export default ErrorBoundary;