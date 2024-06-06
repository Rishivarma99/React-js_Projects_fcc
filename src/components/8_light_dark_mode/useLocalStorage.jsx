import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    //  only onece invoked
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      console.log(e.message);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    // console.log("useEffect invoked" + key + value);
    localStorage.setItem(key, JSON.stringify(value));
    console.log("key changed to : " + value);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
