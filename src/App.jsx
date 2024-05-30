import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Projects_page from "./Projects_page";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Projects_page></Projects_page>
    </>
  );
}

export default App;
