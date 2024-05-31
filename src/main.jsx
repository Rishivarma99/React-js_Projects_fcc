import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AccordionApp from "./components/1_accordion/AccordionApp.jsx";
import RandomColorGenerator from "./components/2_color_generator/RandomColorGenerator.jsx";
import StarRating from "./components/3_star_rating/StarRating.jsx";
import ImageSlider from "./components/4_image_slider/ImageSlider.jsx";
import LoadProducts from "./components/5_load_more_products/LoadProducts.jsx";
import TreeView from "./components/6_tree-view/TreeView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/accordion",
    element: <AccordionApp></AccordionApp>,
  },
  {
    path: "/colorGenerator",
    element: <RandomColorGenerator></RandomColorGenerator>,
  },
  {
    path: "/starRating",
    element: <StarRating></StarRating>,
  },
  {
    path: "/imageSlider",
    element: (
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={15}
      ></ImageSlider>
    ),
  },
  {
    path: "/loadProducts",
    element: (
      <LoadProducts url={"https://dummyjson.com/products"}></LoadProducts>
    ),
  },
  {
    path: "/treeView",
    element: <TreeView></TreeView>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
