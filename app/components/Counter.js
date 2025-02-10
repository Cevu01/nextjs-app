"use client";

import { useState } from "react";

export default function Counter({ data }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  console.log(data);

  return (
    <>
      <p>There are {data.length} users</p>

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>

      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </>
  );
}
