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
import QrGenerator from "./components/7_qr_code_generator/QrGenerator.jsx";
import LightDark from "./components/8_light_dark_mode/LightDark.jsx";
import ScrollBar from "./components/9_scroll_bar/ScrollBar.jsx";
import GithubFinder from "./components/12_GithubFinder/GithubFinder.jsx";

import TabsTest from "./components/10_tabs/TabsTest.jsx";
import ModalPage from "./components/11_custom_modal_page/ModalPage.jsx";
import SearchUsers from "./components/13_search_autocomplete/SearchUsers.jsx";
import TicGame from "./components/14_tic_tac_toe_game/index.jsx";

import FeatureFlags from "./components/15_Feature_flag/index.jsx";
import Customhooks from "./components/17_custom_hooks/Customhooks.jsx";
import ScrollTopBottom from "./components/18_scroll_top_bottom/index.jsx";
import ScrollToSection from "./components/19_Scroll_to_particular/index.jsx";
import WeatherApp from "./components/20_Weather_app/index.jsx";
import ExpenseTracker from "./components/21_Expense_tracker/index.jsx";
import SocialApp from "./components/22_social_media/SocialApp.jsx";

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
  {
    path: "/qrgenerator",
    element: <QrGenerator></QrGenerator>,
  },
  {
    path: "/lightdarkmode",
    element: <LightDark></LightDark>,
  },
  {
    path: "/scrollbar",
    element: <ScrollBar></ScrollBar>,
  },
  {
    path: "/tabs",
    element: <TabsTest></TabsTest>,
  },
  {
    path: "/modalpage",
    element: <ModalPage></ModalPage>,
  },
  {
    path: "/githubfinder",
    element: <GithubFinder></GithubFinder>,
  },
  {
    path: "/searchuser",
    element: <SearchUsers></SearchUsers>,
  },
  {
    path: "/tictactoegame",
    element: <TicGame></TicGame>,
  },
  {
    path: "/featureflags",
    element: <FeatureFlags></FeatureFlags>,
  },

  {
    path: "/customhooks",
    element: <Customhooks></Customhooks>,
  },
  {
    path: "/scrolltopbottom",
    element: <ScrollTopBottom></ScrollTopBottom>,
  },
  {
    path: "/scrolltosection",
    element: <ScrollToSection></ScrollToSection>,
  },
  {
    path: "/weatherapp",
    element: <WeatherApp></WeatherApp>,
  },
  {
    path: "/expensetracker",
    element: <ExpenseTracker></ExpenseTracker>,
  },
  {
    path: "/socialmediaapp",
    element: <SocialApp></SocialApp>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </>
);
