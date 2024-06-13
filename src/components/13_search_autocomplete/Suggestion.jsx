const Suggestion = ({ filteredArray, handleOnClick }) => {
  console.log("hi");
  return (
    <div className="su-diplay-div">
      {filteredArray && filteredArray.length
        ? filteredArray.map((item, index) => {
            return (
              <p
                className="su-item"
                key={index}
                onClick={() => handleOnClick(item)}
              >
                {" "}
                {item}{" "}
              </p>
            );
          })
        : null}
    </div>
  );
};

export default Suggestion;
