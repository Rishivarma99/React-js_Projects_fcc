import { useEffect, useState } from "react";
import "./style.css";

const LoadProducts = ({ url }) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const fetchProducts = (products) => {
    console.log(products);
    if (count == 0) {
      setData(products);
    } else {
      let prevData = data;
      let newData = [...prevData, ...products];
      setData(newData);
    }
  };

  const HandleOnClick = (count) => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetch(`${url}?limit=20&skip=${count === 0 ? 0 : count * 20}`)
      .then((obj) => obj.json())
      .then((obj) => fetchProducts(obj.products));
  }, [count]);

  return (
    <>
      {data && data.length ? (
        <div className="lp-main">
          <h1 className="lp-heading">PRODUCTS</h1>
          <div className="lp-list">
            {data.map((product, index) => {
              return (
                <div className="lp-product" key={index}>
                  <img
                    src={product.thumbnail}
                    alt="image1"
                    className="lp-product-image"
                  />
                  <p className="lp-product-title">{product.title}</p>
                </div>
              );
            })}
          </div>
          <button className="lp-button" onClick={() => HandleOnClick(count)}>
            Load More Data
          </button>
        </div>
      ) : (
        <h1>Data is mot properly loaded </h1>
      )}
    </>
  );
};

export default LoadProducts;

<div className="lp-product">
  <img src="./public/accordion.png" alt="" className="lp-product-image" />
  <p className="lp-product-title">title</p>
</div>;
