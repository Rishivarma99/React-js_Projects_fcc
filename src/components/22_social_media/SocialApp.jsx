import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header1 from "./components/Header1";
import Footer1 from "./components/Footer1";
import Sidebar1 from "./components/Sidebar1";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/posts-list";

function SocialApp() {
  let [selectedTab, setSelectedTab] = useState("Home");

  const handlePage = (event) => {
    console.log(event);

    if (event.target.innerText == "Home") {
      if (selectedTab != "Home") {
        setSelectedTab("Home");
      }
    } else if (event.target.innerText == "CreatePost") {
      if (selectedTab != "CreatePost") {
        setSelectedTab("CreatePost");
      }
    }
  };

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar1 handlePage={handlePage} selectedTab={selectedTab}></Sidebar1>
        <div className="content">
          <Header1></Header1>
          {selectedTab == "Home" && <PostList></PostList>}
          {selectedTab == "CreatePost" && <CreatePost></CreatePost>}

          <Footer1></Footer1>
        </div>
      </div>
    </PostListProvider>
  );
}

export default SocialApp;
