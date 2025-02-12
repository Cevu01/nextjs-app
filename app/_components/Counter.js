"use client";

import { useState } from "react";

export default function Counter({ data }) {
  const [count, setCount] = useState(0);
  console.log(data);

  return (
    <>
      <p>There are {data.length} users</p>

      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </>
  );
}
