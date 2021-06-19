import { useState } from "react";
import products from "../prodData.json";
import Product from "./Product";
import "../styles.css";
const ProductData = () => {
  const [finalData, setFinalData] = useState(products);
  const [sortBy, setSortby] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");

  const getSortedData = (products, sortBy) => {
    if (sortBy === "LOW_TO_HIGH") {
      return products.sort((a, b) => a["price"] - b["price"]);
    }
    if (sortBy === "HIGH_TO_LOW") {
      return products.sort((a, b) => b["price"] - a["price"]);
    }
  };

  const sortData = (sortType) => {
    setSortby(sortType);
    const sortedData = getSortedData(products, sortType);
    setFinalData(sortedData);
  };

  const sortGender = (sortByGender) => {
    setGender(sortByGender);
    if (sortByGender === "M") {
      setFinalData(products.filter((prod) => prod["gender"] === "M"));
    } else if (sortByGender === "F") {
      setFinalData(products.filter((prod) => prod["gender"] === "F"));
    }
  };

  const sortSize = (sortBySize) => {
    setSize(sortBySize);
    if (sortBySize === "S") {
      setFinalData(products.filter((prod) => prod["size"] === "S"));
    } else if (sortBySize === "M") {
      setFinalData(products.filter((prod) => prod["size"] === "M"));
    } else if (sortBySize === "L") {
      setFinalData(products.filter((prod) => prod["size"] === "L"));
    } else if (sortBySize === "XL") {
      setFinalData(products.filter((prod) => prod["size"] === "XL"));
    }
  };

  const clear = () => {
    setSortby("");
    setGender("");
    setSize("");
    setFinalData(products);
  };
  return (
    <div className="App2">
      <div className="sidebar">
        <div className="filter">
          <h3>Filter</h3>
        </div>
        <div className="filterItems">
          <br />
          <b>Sort By</b>
          <br />
          <div className="item">
            <input
              type="radio"
              name="range"
              onChange={() => sortData("LOW_TO_HIGH")}
              checked={sortBy === "LOW_TO_HIGH" ? true : false}
            />
            Low to High
          </div>
          <br />
          <div className="item">
            <input
              type="radio"
              name="range"
              onChange={() => sortData("HIGH_TO_LOW")}
              checked={sortBy === "HIGH_TO_LOW" ? true : false}
            />{" "}
            High to Low
          </div>
          <br />
          <b>Gender</b>
          <br />
          <div className="item">
            <input
              type="radio"
              name="gender"
              onChange={() => sortGender("M")}
              checked={gender === "M" ? true : false}
            />{" "}
            Male
          </div>
          <br />
          <div className="item">
            <input
              type="radio"
              name="gender"
              onChange={() => sortGender("F")}
              checked={gender === "F" ? true : false}
            />{" "}
            Female
          </div>
          <br />
          <b>Size</b>
          <br />
          <div className="item">
            <input
              type="radio"
              name="size"
              onChange={() => sortSize("S")}
              checked={size === "S" ? true : false}
            />{" "}
            S
            <input
              type="radio"
              name="size"
              onChange={() => sortSize("M")}
              checked={size === "M" ? true : false}
            />{" "}
            M
            <input
              type="radio"
              name="size"
              onChange={() => sortSize("L")}
              checked={size === "L" ? true : false}
            />{" "}
            L
            <input
              type="radio"
              name="size"
              onChange={() => sortSize("XL")}
              checked={size === "XL" ? true : false}
            />{" "}
            XL
          </div>
        </div>
        <button className="btnClear" type="reset" onClick={clear}>
          Clear
        </button>
      </div>
      <div className="productContainer">
        {finalData.map((data) => (
          <Product key={data.id}>{data}</Product>
        ))}
      </div>
    </div>
  );
};
export default ProductData;
