import React from "react";
import Hello from "./demo/Hello";
import HelloClass from "./demo/HelloClass";
import "./app.css";
import { Foo } from "@components";

const App: React.FC = () => {
  return (
    <div>
      <Foo title="foo" />
      <Hello name="TypeScript" />
      <br />
      <br />
      <HelloClass name="TypeScript" />
    </div>
  );
};

export default App;
