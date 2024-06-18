/** 
   IMP : 
   to get height : document.documentELement.scrollHeight
   WINDOW.SCROLLtO({top : higght , behaviour : smooth})
 */

import useFetch from "../17_custom_hooks/use_fetch";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";
import "./style.css";
const ScrollTopBottom = () => {
  const { fetching, data, errorMsg } = useFetch(
    "https://dummyjson.com/products?limit=100&skip=0&select=title",
    {}
  );

  // IMPORTNAT
  const handleScrollToBottom = () => {
    const scrollHeight = document.documentElement.scrollHeight; // Get document height
    console.log(scrollHeight);
    window.scrollTo({ top: scrollHeight, behavior: "smooth" }); // Smooth scroll
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="scrolltb-main">
        <h2>Scroll Top Bottom Buttons</h2>
        {fetching ? <div className="fetching-msg">Data is Fetching</div> : null}
        {errorMsg != null ? <h3>{errorMsg}</h3> : null}
        {data && data.length ? (
          <div className=" scrolltb-data-div">
            <HiArrowSmDown
              onClick={handleScrollToBottom}
              className="scrolltb-icon-down "
            ></HiArrowSmDown>
            {data.map((item) => {
              return (
                <p className="scrolltb-title" key={item.id}>
                  {item.title}
                </p>
              );
            })}
            <HiArrowSmUp
              onClick={handleScrollToTop}
              className="scrolltb-icon-up "
            ></HiArrowSmUp>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ScrollTopBottom;
