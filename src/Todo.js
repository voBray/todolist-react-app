/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from "react";

export default function Todo({ todo }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} />
        {todo.name}
      </label>
    </div>
  );
}
