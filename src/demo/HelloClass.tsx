import React, { Component } from "react";
import { Button } from "antd";

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}
interface State {
  count: number;
}
class HelloClass extends Component<Greeting, State> {
  state = {
    count: 1
  };
  static defaultProps = {
    firstName: "2",
    lastName: "3"
  };

  render() {
    return (
      <>
        <p> 您点击了{this.state.count}次</p>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Hello {this.props.name}
        </Button>
      </>
    );
  }
}

export default HelloClass;
