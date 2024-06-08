//  api TO get details : https://api.github.com/users/USERNAME

import { useState } from "react";
import "./style.css";
import { useEffect } from "react";
import { useRef } from "react";
import UserDetails from "./UserDetails";
export const FetchingComponent = () => {
  return <div className="fetching-msg">Data is Fetching</div>;
};
const GithubFinder = () => {
  let username = useRef();
  const [user, setUser] = useState("");

  const [userDetails, setUserDetails] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleOnClick = () => {
    let presentUsername = username.current.value;
    console.log(presentUsername);
    setUser(presentUsername);
    username.current.value = "";
  };

  async function fetchGithubUserDetails() {
    try {
      setFetching(true);
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json(); // this data is a object
      if (data) {
        setUserDetails(data);
        setFetching(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setFetching(false);
    }
  }

  useEffect(() => {
    if (user != "" && !fetching) {
      fetchGithubUserDetails();
    }
  }, [user]);

  return (
    <>
      <div className="gf-main">
        <h1 className="gf-heading">GitHub Profile Finder</h1>

        <div className="gf-search-container">
          {errorMsg != null && <div>Error occured {errorMsg}</div>}
          <input
            type="text"
            placeholder="Enter the user name...."
            name="search-by-username"
            ref={username}
            className="gf-input"
          />
          <button
            type="button"
            className="btn btn-success gf-button"
            onClick={() => handleOnClick()}
          >
            Search
          </button>
        </div>

        <div className="gf-user-details-container">
          {fetching ? (
            <FetchingComponent></FetchingComponent>
          ) : userDetails != null ? (
            <UserDetails user={userDetails}></UserDetails>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default GithubFinder;
