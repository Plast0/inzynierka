import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

type Props = {
    props?: ReactNode;
    children?: ReactNode;
}

class ErrorBoundary extends Component<Props, ErrorBoundaryState> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Zaktualizuj stan, aby wskazać, że wystąpił błąd.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Logika do logowania błędów, np. wysyłanie do zewnętrznego serwisu
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Możesz renderować dowolny element UI w przypadku błędu.
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;