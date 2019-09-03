import React, { Component } from "react";
import HelloClass from "./HelloClass";

interface Loading {
  loading: boolean;
}

function HelloHOC<P>(WrappedComponent: React.ComponentType<P>) {
  return class extends Component<P & Loading> {
    render() {
      const { loading, ...props } = this.props;
      if (loading) return "loading";
      return <WrappedComponent {...(props as P)} />;
    }
  };
}

export default HelloHOC(HelloClass);
