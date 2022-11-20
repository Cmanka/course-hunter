import { Heading } from 'grommet';
import React, { Component, ErrorInfo } from 'react';

import { Props, State } from './types';

class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Heading>Sorry.. there was an error</Heading>;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
