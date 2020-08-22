import React, { useEffect, useState } from "react";
import "./products.css";
import { fetchData, pathsData } from "../../const";
import ProductCard from '../ProductCard';
import SortBar from '../SortBar';
import { sortFactors } from '../../const';

const Products = ({ id, method, path }) => {
  //let products= [];
  console.log(id, method, path);
  const [products, setProducts] = useState([]);
  const [ priceFilter, setPriceFilter ] = useState();
  const [ categoryFilter, setCategoryFilter ] = useState('');
  const [ sortBy, setSortBy ] = useState('');


  useEffect(() => {
    fetchData({ data: pathsData[id] }).then((res) =>setProducts(res));
  }, [id]);

  console.log('productos',products);
  //let productsToDisplay =  ;
  
  const productsToDisplay = [...products].sort((a,b)=> (sortBy===sortFactors[0])? a.cost - b.cost: b.cost-a.cost);
  console.log('productos a mostrar',productsToDisplay);
  return (
    <div className='products'>
      <SortBar setSortBy={setSortBy}/>
      {/* <FilterBar /> */}
      <div className='main'>
        <div className='grid'>
      {productsToDisplay.map(element => <ProductCard key={element._id} {... element}/>)}
      </div>
      </div>
    </div>
  );
};

export default Products;
