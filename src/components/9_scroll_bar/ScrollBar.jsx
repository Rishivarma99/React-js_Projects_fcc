import { useEffect, useState } from "react";
import "./style.css";
const ScrollBar = (url) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState([]);

  const [scroll, setScroll] = useState(0);
  async function fetchNames(url) {
    try {
      setFetching(true);
      const response = await fetch(
        "https://dummyjson.com/products?limit=100&skip=0&select=title"
      );
      const data = await response.json();
      if (data) {
        setData(data.products);
        setFetching(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setFetching(false);
    }
  }

  useEffect(() => {
    if (url && url != "") {
      fetchNames(url);
    }
  }, [url]);

  const handleScroll = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    let howmuchscrooled = document.documentElement.scrollTop;

    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScroll((howmuchscrooled / height) * 100);
    console.log(scroll);
    // to toal hight 2612
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return window.removeEventListener("scroll", () => {}); // imp to remove a event listner
  }, []);

  if (fetching) {
    return <div className="fetching-msg">Data is Fetching</div>;
  }

  if (errorMsg !== null) {
    return <div className="error-msg"> Error is : {errorMsg}</div>;
  }

  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <div className="sb-main">
        <div className="sb-top">
          <h2>Custom scroll bar</h2>

          <div className="progress-bar-main">
            <div class="bar" style={{ width: `${scroll}%` }}></div>
          </div>
        </div>
        <div className="sb-scroll">
          {data.map((item) => {
            return <h5 key={item.id}>{item.title}</h5>;
          })}
        </div>
      </div>
    </>
  );
};
export default ScrollBar;
