//  api TO get details : https://api.github.com/users/USERNAME

import { useState } from "react";
import "./style.css";
import { useEffect } from "react";
import { useRef } from "react";

const GithubFinder = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [fetching, setFetching] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleOnClick = () => {
    setUser(userName);
  };

  async function fetchGithubUserDetails() {
    try {
      setFetching(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json(); // this data is a object
      if (data) {
        console.log(data);

        setFetching(false);
        setUserName("");
      }
    } catch (e) {
      setErrorMsg(e.message);
      setFetching(false);
    }
  }

  useEffect(() => {
    if (user != "") {
      fetchGithubUserDetails();
    }
  }, [user]);

  if (fetching) {
    return <div>User details fetching</div>;
  }

  return (
    <>
      <div className="gf-main">
        <div className="gf-search-container">
          <input
            type="text"
            placeholder="Enter the user name...."
            name="search-by-username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button
            type="button"
            className="btn btn-success"
            onClick={() => handleOnClick()}
          >
            Success
          </button>
        </div>

        <div className="gf-user-details">
          {fetching ? (
            <div>User details fetching</div>
          ) : errorMsg != null ? (
            <div>Error Occured {errorMsg}</div>
          ) : (
            <>
              <div>name : {userDetails.name}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default GithubFinder;
