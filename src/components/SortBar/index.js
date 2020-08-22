import React, { useState } from 'react';
import './sortBar.css';
import { sortFactors } from '../../const';

const SortBar = ({setSortBy}) => {
    const [ active, setActive ] = useState('');
    console.log(setSortBy);
    const handleSort= (id) => {
        console.log('button',id);
        setActive(id);
        setSortBy(id);
    }
    
    return (
        <div className='sortBar'>
            {sortFactors.map(element => <button className={(active===element)?'btn-active':'btn'} onClick={() =>handleSort(element)}>{element}</button>)}
        </div>
    );
}

export default SortBar;