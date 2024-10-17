import React from "react";

function Filter({ label, filter }) {
  //TODO htmlFor
  return (
    <div>
      <label htmlFor={label}>{label}</label>

      <select onChange={filter}>
        <option value="Men">Men</option>
        <option value="Kids">Kids</option>
        <option value="Women">Women</option>
      </select>
    </div>
  );
}

export default Filter;
