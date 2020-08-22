import React, { useState } from "react";
import "./listFilter.css";

const ListFilter = ({ handleFilterChange, id, options }) => {
  const [selected, setSelected] = useState("");
  options = [id, ...options];

  const handleChange = (selection) => {
    setSelected(selection);
    handleFilterChange(selection);
  };

  return (
    <div className="filter">
      <select onChange={(e) => handleChange(e.target.value)} value={selected}>
        {options.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListFilter;
