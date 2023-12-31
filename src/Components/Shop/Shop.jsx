import React, { useState } from "react";
import { ShopHeader } from "../Header/HeaderComponents";
import priceIcon from "../../assets/priceIcon.png";
import littleArrow from "../../assets/littleArrow.svg";
import searchIcon from "../../assets/searchIcon.png";
import heartsvg from "../../assets/heartsvg.svg";
import { Link } from "react-router-dom";

const Shop = ({ products }) => {
  const [productData, setProductData] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(6);
  const totalDataPage = Math.ceil(productData.length / dataPerPage);
  const [searchInput, setSearchInput] = useState("");
  const [price, setPrice] = useState(1000);
  const [sortOption, setSortOption] = useState("");
  const [resFilter, setResFilter] = useState(false);

  // responsive filter

  const responsiveFilter = () => {
    setResFilter(!resFilter);
  };

  const handleCloseFilter = () => {
    setResFilter(false);
  };

  // pagination function
  const dataPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalDataPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const dataLastIndex = currentPage * dataPerPage;
  const dataFirstIndex = dataLastIndex - dataPerPage;
  let currentDataItems = productData.slice(dataFirstIndex, dataLastIndex);

  // filter function
  const filterResult = (catProducts) => {
    const result = products.filter((currentData) => {
      return currentData.category === catProducts;
    });
    setProductData(result);
    setCurrentPage(1);
  };

  const reset = () => {
    setProductData(products);
    setCurrentPage(1);
    setPrice(1000);
    setSortOption("");
  };

  // search function
  if (searchInput.length > 0) {
    currentDataItems = productData.filter((data) => {
      return (
        data.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        data.category.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  //  price
  const handleRangePrice = (e) => {
    setPrice(parseInt(e.target.value));
  };
  const filteredPrice = currentDataItems.filter((data) => {
    return parseInt(data.price) <= price;
  });

  // sort select
  let sortDataItems = [...filteredPrice];
  if (sortOption === "ascending") {
    sortDataItems.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortOption === "descending") {
    sortDataItems.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "lowtohigh") {
    sortDataItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sortOption === "hightolow") {
    sortDataItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }
  return (
    <>
      <ShopHeader />
      <div className="shop-container">
        <div className="shop-inner_container">
          <div
            className={
              resFilter ? "shop-left_filter active" : "shop-left_filter"
            }
          >
            <div className="shop-price_filter">
              <button className="close-btn" onClick={responsiveFilter}>
                Close
              </button>
              <div className="price-filter">
                <h3>Price</h3>
                <img src={priceIcon} alt={priceIcon} />
              </div>
              <input
                type="range"
                min="5"
                max="1000"
                onChange={handleRangePrice}
              />
              <div className="range-filter">
                <p>Range</p>
                <span>${price}-$1000</span>
              </div>
              <h3 className="categories-header">Categories</h3>
              <div className="categories-filter">
                <div
                  className="categories-filter_container"
                  onClick={() => {
                    filterResult("men's clothing");
                    handleCloseFilter();
                  }}
                >
                  <span>Men's Clothing</span>
                  <img src={littleArrow} alt={littleArrow} />
                </div>
                <div
                  className="categories-filter_container"
                  onClick={() => {
                    filterResult("women's clothing");
                    handleCloseFilter();
                  }}
                >
                  <span>Women's Clothing</span>
                  <img src={littleArrow} alt={littleArrow} />
                </div>
                <div
                  className="categories-filter_container"
                  onClick={() => {
                    filterResult("electronics");
                    handleCloseFilter();
                  }}
                >
                  <span>Electronics</span>
                  <img src={littleArrow} alt={littleArrow} />
                </div>
                <div
                  className="categories-filter_container"
                  onClick={() => {
                    filterResult("jewelery");
                    handleCloseFilter();
                  }}
                >
                  <span>Jewelery</span>
                  <img src={littleArrow} alt={littleArrow} />
                </div>
              </div>
              <div
                className="categories-filter_container"
                onClick={() => {
                  reset();
                  handleCloseFilter();
                }}
              >
                <button>Reset Filter</button>
              </div>
            </div>
          </div>
          <div className="shop-right_filter">
            <div className="search-filter">
              <input type="text" onChange={handleChange} value={searchInput} />
              <img src={searchIcon} alt={searchIcon} />
            </div>

            <div className="sortby-filter">
              <p>
                Showing {currentPage} - {currentDataItems.length} Results
              </p>
              <div className="res-btn" onClick={responsiveFilter}>
                <button>Filter</button>
              </div>
              <span>Sort by:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Default</option>
                <option value="ascending">ascending</option>
                <option value="descending">descending</option>
                <option value="hightolow">high to low</option>
                <option value="lowtohigh">low to high</option>
              </select>
            </div>
            <div className="shop-data_container">
              {sortDataItems.map((data) => {
                return (
                  <div key={data.id} className="shop-data">
                    <Link className="Link" to={`${data.id}`}>
                      <div className="shop-data_image">
                        <img
                          className="data-img"
                          src={data.image}
                          alt={data.image}
                        />
                        <span>
                          <img src={heartsvg} alt={heartsvg} />
                        </span>
                      </div>
                      <div className="shop-data_info">
                        <p>{data.category}</p>
                        <span>{data.title}</span>
                        <p>${data.price}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="pagination">
              <button
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              {dataPageNumbers().map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handleClick(pageNumber)}
                  className={pageNumber === currentPage ? "active" : ""}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalDataPage}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
