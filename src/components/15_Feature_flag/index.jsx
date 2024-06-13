import { useContext } from "react";
import FeatureFlagGlobalState, { FeatureFlagsContext } from "./context";
import BuildComponents from "./BuildComponents";
import "./style.css";
const FeatureFlags = () => {
  return (
    <FeatureFlagGlobalState>
      <BuildComponents></BuildComponents>
    </FeatureFlagGlobalState>
  );
};

export default FeatureFlags;
