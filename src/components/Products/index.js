import React, { useEffect, useState } from "react";
import "./products.css";
import { fetchData, pathsData } from "../../const";
import ProductCard from '../ProductCard';

const Products = ({ id, method, path }) => {
  console.log(id, method, path);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData({ data: pathsData[id] }).then((res) => setProducts(res));
  }, [id]);

  return (
    <div>
      {/* <SortBar />
      <FilterBar /> */}
      <div className='main'>
        <div className='grid'>
      {products.map(element => <ProductCard key={element._id} {... element}/>)}
      </div>
      </div>
    </div>
  );
};

export default Products;
