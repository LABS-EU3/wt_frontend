import React from "react";
import NotFound from "../common/NotFound";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <NotFound message="Oops!!! Something went wroing" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
