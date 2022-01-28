import React from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    const StyledHeadline = styled.h1`
      color: white;
    `;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Navigate to="/404" />;
    }

    return this.props.children;
  }
}
