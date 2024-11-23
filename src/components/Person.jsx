import React from "react";

export default function Person({ nom, id, onClick }) {
  return (
    <li>
      {nom} <button onClick={() => onClick(id)}>X</button>
    </li>
  );
}
