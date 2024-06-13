// this is the context :

import { createContext, useEffect, useState } from "react";
import { FaLeftLong } from "react-icons/fa6";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

const FeatureFlagGlobalState = ({ children }) => {
  // in this function we create fetching nd fetch data from the data js

  const [fetching, setFetching] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [enableFlagsData, setEnableFlagsData] = useState({});

  async function fetchFeatureFlags() {
    try {
      // setFetching(true);
      const response = await featureFlagsDataServiceCall();
      // console.log(response);
      if (response) {
        setEnableFlagsData(response);
        setFetching(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setFetching(false);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ fetching, enableFlagsData }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export default FeatureFlagGlobalState;
