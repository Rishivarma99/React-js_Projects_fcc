import { useEffect, useState } from "react";
import "./style.css";
import Suggestion from "./Suggestion";

const SearchUsers = () => {
  const [input, setInput] = useState("");

  const [user, setUser] = useState([]); // will store the users names details
  const [fetching, setFetching] = useState(false);

  // for drop down
  const [showDrop, setShowDrop] = useState(false);
  // to store the fitred keywords
  const [filteredArray, setFilteredArray] = useState([]);

  async function fetchUserData() {
    try {
      setFetching(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setUser(data.users.map((userItem) => userItem.firstName));
        setFetching(false);
      }
    } catch (e) {
      console.log(e);
      setFetching(false);
    }
  }

  const handleSearch = (event) => {
    let query = event.target.value.toLowerCase();
    setInput(query);
    if (query.length > 1) {
      console.log(user);
      let newFilteredArray =
        user && user.length
          ? user.filter(
              (itemName) => itemName.toLowerCase().indexOf(input) > -1
            )
          : [];
      setFilteredArray(newFilteredArray);
      console.log(newFilteredArray);
      setShowDrop(true);
    } else {
      setShowDrop(false);
    }
  };

  const handleOnClick = (item) => {
    setInput(item);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  if (fetching) {
    return <div className="fetching-msg">Data is Fetching</div>;
  }

  return (
    <>
      <div className="su-main">
        <h1 className="su-heading">Search User Auto Complete</h1>

        <div className="su-search-user">
          <input
            type="text"
            placeholder="Enter user name ..."
            name="search-user"
            value={input}
            onChange={(event) => handleSearch(event)}
            className="su-input"
          />
          <button
            type="button"
            className="btn btn-light"
            onClick={() => setInput("")}
          >
            Clear
          </button>
        </div>
        {showDrop && (
          <Suggestion
            filteredArray={filteredArray}
            handleOnClick={handleOnClick}
          ></Suggestion>
        )}
      </div>
    </>
  );
};

export default SearchUsers;
