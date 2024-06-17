import { useRef, useState } from "react";
import useFetch from ".";
import "./style.css";
export default function UseFetchHookTest() {
  const { fetching, data, errorMsg } = useFetch(
    "https://dummyjson.com/products?limit=100&skip=0&select=title",
    {}
  );

  console.log(data);

  return (
    <>
      <div className="use-fetch-div">
        <h2>Use Fetch Custom Hook</h2>

        {fetching ? <div className="fetching-msg">Data is Fetching</div> : null}
        {errorMsg != null ? <h3>{errorMsg}</h3> : null}
        {data && data.length
          ? data.map((item) => {
              return (
                <h5 key={item.id} className="usefetch-names">
                  {item.title}
                </h5>
              );
            })
          : null}
      </div>
    </>
  );
}
