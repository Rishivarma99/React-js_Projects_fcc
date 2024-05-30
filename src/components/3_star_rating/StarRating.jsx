import { useState } from "react";
import { FaStar } from "react-icons/fa";
import css from "./StarRating.module.css";

function StarRating({ noOfStars = 8 }) {
  // if not given default 5
  const stars = Array(noOfStars).fill(null);
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(0);

  const handleOnClick = (index) => {
    console.log(index);
    let cpyRating = index;
    setrating(cpyRating);
  };
  const handleOnMouseMove = (index) => {
    console.log("move" + index);
    sethover(index);
  };
  const handleOnMouseLeave = () => {
    sethover(rating);
  };
  return (
    <>
      <h1>STAR RATING PROJECT</h1>
      <div className={`${css.starContainer}`}>
        {stars.map((_, index) => {
          index += 1;
          return (
            <FaStar
              onClick={() => handleOnClick(index)}
              key={index}
              className={`
              ${index <= (hover ?? rating) ? css.active : css.inactive}
            `}
              onMouseMove={() => handleOnMouseMove(index)}
              onMouseLeave={() => handleOnMouseLeave()}
              size={40}
            ></FaStar>
          );
        })}
      </div>
    </>
  );
}
export default StarRating;
