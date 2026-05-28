import React from "react";
import { Button } from "./components/button";
import { Input } from "./components/input";

function App() {
  return (
    <div className="bg-blue-500 p-6 min-h-screen text-white justify-content items-center">
      <h1 className="text-xl font-bold">verify your age</h1>
      <br />
      <p>please confirm your birth year</p>
      <Input
        type="number"
        placeholder="your birth year"
      />
      <br />
      <br />
      <Button disabled={true} style={{ flex: 2 }}>
        CONTINUEeeee
      </Button>
    </div>
  );
}

export default App;
