import React from "react";

interface FooProps {
  title: string;
}
const Foo: React.FC<FooProps> = props => <h1>{props.title}</h1>;

export default Foo;
