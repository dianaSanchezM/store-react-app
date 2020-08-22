import React from "react";
import './sortBar.css';

const SortButton = ({ active, id, handleSort }) => {
  return <button className={(active===id)?'btn-active':'btn'} onClick={() =>handleSort(id)}>{id}</button>;
};

export default SortButton;
