// here we create our custom hook

import { useEffect } from "react";

const UseOutSideCustomHook = (ref, handler) => {
  useEffect(() => {
    function listener(event) {
      console.log(ref.current);
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    }

    // for laptops when left mouse is clicked
    document.addEventListener("mousedown", listener);
    // for phones when touch input
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default UseOutSideCustomHook;
