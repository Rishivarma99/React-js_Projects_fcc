import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  console.log(url);
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchData() {
    setFetching(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result.products);
      setErrorMsg(null);
      setFetching(false);
    } catch (e) {
      setErrorMsg(`${e.message} : error occured`);
      setFetching(false);
    }
  }

  useEffect(() => {
    if (url != "") {
      fetchData();
    }
  }, []);

  console.log(data);

  return { fetching, data, errorMsg };
};

export default useFetch;
