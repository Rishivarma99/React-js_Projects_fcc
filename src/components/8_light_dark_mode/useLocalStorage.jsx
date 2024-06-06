import { useEffect, useState } from "react";

const useLocalStorage = (key, intitialValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    //  only onece invoked
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(intitialValue) // intiali value only invoked
      );
    } catch (e) {
      console.log(e.message);
      currentValue = intitialValue;
    }

    return currentValue;
  });
  console.log(value);

  useEffect(() => {
    // console.log("useEffect invoked" + key + value);

    console.log("useefect invoked");
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
