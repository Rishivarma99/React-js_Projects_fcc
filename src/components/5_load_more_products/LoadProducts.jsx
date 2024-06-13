import { useEffect, useState } from "react";
import "./style.css";

const LoadProducts = ({ url }) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const HandleOnClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (url != "") {
      // FetchItems(`${url}?limit=20&skip=${count === 0 ? 0 : count * 20}`);

      FetchItems(`${url}?limit=20&skip=${count * 20}`);
    }
  }, [count, url]);

  async function FetchItems(url) {
    try {
      setFetching(true);
      const respone = await fetch(url);
      const data = await respone.json();
      if (data) {
        setFetching(false);
        fetchProducts(data.products);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setFetching(false);
    }
  }

  const handleButtonClick = (event) => {
    event.preventDefault();

    HandleOnClick();
  };

  const fetchProducts = (products) => {
    // if (count == 0) {
    //   setData(products);
    // } else {
    //   let prevData = data;
    //   let newData = [...prevData, ...products];
    //   setData(newData);
    // }
    setData([...data, ...products]);
  };

  if (fetching) {
    return <div className="fetching-msg">Data is Fetching</div>;
  }

  if (errorMsg !== null) {
    return <div className="error-msg"> Error is : {errorMsg}</div>;
  }

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

          <button
            type="button"
            className="btn btn-info lp-button"
            onClick={handleButtonClick}
          >
            {" "}
            Load More Data
          </button>
        </div>
      ) : (
        <h1>Data is not properly loaded </h1>
      )}
    </>
  );
};

export default LoadProducts;

<div className="lp-product">
  <img src="./public/accordion.png" alt="" className="lp-product-image" />
  <p className="lp-product-title">title</p>
</div>;
