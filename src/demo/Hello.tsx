import React from "react";
import { Button } from "antd";

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}
const Hello: React.FC<Greeting> = ({ name, firstName, lastName }) => (
  <Button>Hello {name}</Button>
);

Hello.defaultProps = {
  firstName: "1d",
  lastName: ""
};

export default Hello;
