import React from "react";

function App() {
  return (
    <div className="bg-blue-500 p-6 min-h-screen text-white justify-content items-center">
      <h1 className="text-xl font-bold">verify your age</h1>
      <br />
      <p>please confirm your birth year</p>
      <input
        type="number"
        placeholder="your birth year"
        className="text-black px-2 py-1 rounded"
      />
      <br />
      <br />
      <button className="bg-white text-blue-500 px-4 py-1.5 rounded font-bold">
        CONTINUEeeee
      </button>
    </div>
  );
}

export default App;
