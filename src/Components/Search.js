import { useState } from "react";
export default function Search({ handleSearch }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      ></input>
    </div>
  );
}
