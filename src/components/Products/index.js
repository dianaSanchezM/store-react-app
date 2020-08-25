import React, { useEffect, useState } from "react";
import "./products.css";
import { fetchData, pathsData, filters } from "../../const";
import ProductCard from "../ProductCard";
import SortBar from "../SortBar";
import { sortFactors, itemsPerPage } from "../../const";
import FilterBar from "../FilterBar";
import usePagination from "../../utils/usePagination";
import Pagination from "../Pagination";

const Products = ({ id, method, path }) => {
  const [products, setProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState(filters[1].id);
  const [categoryFilter, setCategoryFilter] = useState(filters[0].id);
  const [sortBy, setSortBy] = useState("");
  
  useEffect(() => {
    fetchData({ data: pathsData[id] }).then((res) => setProducts(res));
  }, [id]);

  let productsToDisplay = [...products]
    .sort((a, b) =>
      sortBy === sortFactors[0] ? a.cost - b.cost : b.cost - a.cost
    )
    .filter(
      (element) =>
        (categoryFilter === filters[0].id ||
          element.category === categoryFilter) &&
        (priceFilter === filters[1].id ||
          (element.cost > parseInt(priceFilter.split("-")[0]) &&
            element.cost < parseInt(priceFilter.split("-")[1])))
    );

  //setProducts(productsToDisplay);
  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(productsToDisplay, itemsPerPage);
  productsToDisplay = currentData();


  return (
    <div className="products">
      <div className="menu">
        <SortBar setSortBy={setSortBy} jump={jump} />
        <FilterBar
          products={products}
          setCategoryFilter={setCategoryFilter}
          setPriceFilter={setPriceFilter}
          jump={jump}
        />
        <Pagination currentPage={currentPage} jump={jump} prev={prev} next={next} maxPage={maxPage} />
      </div>

      <div className="grid">
        {productsToDisplay.map((element) => (
          <ProductCard key={element._id} {...element} />
        ))}
      </div>
      <div className="menu" style={{'justify-content':'right', 'paddingRight':'10%'}}>
        <Pagination currentPage={currentPage} jump={jump} prev={prev} next={next} maxPage={maxPage} />
      </div>
    </div>
  );
};

export default Products;
