import React from "react";

function Filter({ label }) {
  //TODO htmlFor
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select>
        <option value="Men">Men</option>
        <option value="Kids">Kids</option>
        <option value="Women">Women</option>
      </select>
    </div>
  );
}

export default Filter;
