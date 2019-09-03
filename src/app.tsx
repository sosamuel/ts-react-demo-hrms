import React from "react";
import Hello from "./demo/Hello";
import HelloClass from "./demo/HelloClass";
import HelloHoc from "./demo/HelloHOC";
import HelloHooks from "./demo/HelloHooks";
import "./app.css";
import { Foo } from "@components";

const App: React.FC = () => {
  return (
    <div>
      <Foo title="foo" />
      <Hello name="TypeScript Stateless" />
      <br />
      <br />
      <HelloClass name="TypeScript Class" />
      <br />
      <br />
      <HelloHoc loading={true} name="TypeScript HOC" />
      <br />
      <br />
      <HelloHooks name="TypeScript Hooks" />
    </div>
  );
};

export default App;
