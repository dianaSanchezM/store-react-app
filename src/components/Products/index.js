import React, { useEffect, useState, Fragment } from "react";
import "./products.css";
import {
  fetchData,
  pathsData,
  filters,
  sortFactors,
  itemsPerPage,
} from "../../const";
import SortBar from "../SortBar";
import FilterBar from "../FilterBar";
import usePagination from "../../utils/usePagination";
import Pagination from "../Pagination";

const Products = ({ info: { id }, render }) => {
  const [products, setProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState(filters.price.id);
  const [categoryFilter, setCategoryFilter] = useState(filters.category.id);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    //fetchData({ data: pathsData[id] }).then((res) => setProducts(res));
    (async () => {
      setProducts(await fetchData({ data: pathsData[id] }));
    })();
  }, [id]);

  const productsToDisplay = products.filter(
      (element) =>
        (categoryFilter === filters.category.id ||
          element.category === categoryFilter) &&
        (priceFilter === filters.price.id ||
          (element.cost > parseInt(priceFilter.split("-")[0]) &&
            element.cost <= parseInt(priceFilter.split("-")[1])))
    )
    .sort((a, b) =>
      sortBy === sortFactors.lowPrice ? a.cost - b.cost : b.cost - a.cost
    );

  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    productsToDisplay,
    itemsPerPage
  );

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
        <Pagination
          currentPage={currentPage}
          jump={jump}
          prev={prev}
          next={next}
          maxPage={maxPage}
        />
      </div>

      <div className="grid">
        {currentData().map((element) => (
          <Fragment key={Math.random()}>{render({ ...element })}</Fragment>
        ))}
      </div>
      <div
        className="menu"
        style={{ justifyContent: "right", paddingRight: "10%" }}
      >
        <Pagination
          currentPage={currentPage}
          jump={jump}
          prev={prev}
          next={next}
          maxPage={maxPage}
        />
      </div>
    </div>
  );
};

export default Products;
