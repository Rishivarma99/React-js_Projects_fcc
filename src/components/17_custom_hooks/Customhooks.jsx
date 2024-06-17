import UseFetchHookTest from "./use_fetch/test";
import UseOutsideClick from "./use-outside-click/indexApp";
import WindowResize from "./use-window-resize";

const Customhooks = () => {
  return (
    <>
      <h1>Custom Hook </h1> ;<UseOutsideClick></UseOutsideClick>
      <WindowResize></WindowResize>
      <UseFetchHookTest></UseFetchHookTest>
    </>
  );
};
export default Customhooks;
