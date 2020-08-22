import React from 'react';
import ListFilter from '../ListFilter';
import './filterBar.css';
import { filters } from '../../const';

const FilterBar = ({ products, setCategoryFilter, setPriceFilter }) => {
    let categories = [...products].map(e => e.category);
    const category = {...filters[0], options: categories.filter((element,pos) => categories.indexOf(element) === pos)};

    return (
        <div className='filterBar'>
            <p>Filter by: </p>
            <ListFilter {...category} handleFilterChange={setCategoryFilter}/>
            <ListFilter {...filters[1]} handleFilterChange={setPriceFilter}/>
        </div>
    );
}

export default FilterBar;