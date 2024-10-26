import React, { useMemo, useState } from "react";

function Calculate() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const calculation = (num) => {
    console.log("calculate.........");
    for (let index = 0; index < 1000000; index++) {}
    return num * 2;
  };
  const memoData=useMemo(()=>calculation(count),[count])

  return (
    <>
      <h1>Count: {count}</h1>
      <h2>memoized calculation : {memoData}</h2>
      <button onClick={() => setCount(count + 1)}>increment </button>

      <input
        type="text"
        value={text}
        placeholder="write Something"
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default Calculate;
