import React, { useEffect, useState } from "react";
import "./products.css";
import { fetchData, pathsData, filters } from "../../const";
import ProductCard from '../ProductCard';
import SortBar from '../SortBar';
import { sortFactors } from '../../const';
import FilterBar from '../FilterBar';

const Products = ({ id, method, path }) => {
  //let products= [];
  console.log(id, method, path);
  const [ products, setProducts] = useState([]);
  const [ priceFilter, setPriceFilter ] = useState(filters[1].id);
  const [ categoryFilter, setCategoryFilter ] = useState(filters[0].id);
  const [ sortBy, setSortBy ] = useState('');


  useEffect(() => {
    fetchData({ data: pathsData[id] }).then((res) =>setProducts(res));
  }, [id]);
  
  let productsToDisplay = [...products]
  .sort((a,b)=> (sortBy===sortFactors[0])? a.cost - b.cost: b.cost-a.cost);

  productsToDisplay = (categoryFilter==='category')?[...productsToDisplay]: productsToDisplay.filter(element => element.category===categoryFilter);


  console.log('productos a mostrar',productsToDisplay);
  return (
    <div className='products'>
      <div className='menu'>
      <SortBar setSortBy={setSortBy}/>
      <FilterBar products={products} setCategoryFilter={setCategoryFilter} setPriceFilter={setPriceFilter}/>
      </div>
      
      <div className='main'>
        <div className='grid'>
      {productsToDisplay.map(element => <ProductCard key={element._id} {... element}/>)}
      </div>
      </div>
    </div>
  );
};

export default Products;
