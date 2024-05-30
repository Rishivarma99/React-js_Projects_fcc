import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./style.css";

export default function ImageSlider({ url, limit }) {
  const [ImageData, setImageData] = useState([]); // image data
  const [currentSlide, setCurrentSlide] = useState(0); // will have index
  const [errorMsg, setErrorMsg] = useState(null);
  const [fetching, setFetching] = useState(false);
  // data fetching
  async function fetchImages(geturl) {
    try {
      setFetching(true);
      const response = await fetch(`${geturl}?page=2&limit=${limit}`);
      const data = await response.json();
      // if data presnt
      if (data) {
        setImageData(data);
        // console.log("fetching completed");
        setFetching(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setFetching(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (fetching) {
    return <div>Data is fetching</div>;
  }
  if (errorMsg !== null) {
    return <div>Erorr occured {errorMsg} </div>;
  }
  const onClickRight = () => {
    setCurrentSlide(
      currentSlide === ImageData.length - 1 ? 0 : currentSlide + 1
    );
  };

  const onClickLeft = () => {
    setCurrentSlide(
      currentSlide === 0 ? ImageData.length - 1 : currentSlide - 1
    );
  };

  return (
    <div className="slider-main">
      <h1 className="slider-heading">IMAGE SLIDER </h1>
      <div className="image-slider-container">
        <FaArrowLeft
          className="arrow arrow-left"
          onClick={onClickLeft}
        ></FaArrowLeft>

        {ImageData && ImageData.length
          ? ImageData.map((image, index) => {
              return (
                <img
                  src={image.download_url}
                  alt={image.download_url}
                  key={image.id}
                  className={
                    currentSlide != index
                      ? "current-image hide"
                      : "current-image"
                  }
                ></img>
              );
            })
          : null}

        <FaArrowRight
          className="arrow arrow-right"
          onClick={onClickRight}
        ></FaArrowRight>

        <span className="circle-indicators">
          {ImageData && ImageData.length
            ? ImageData.map((_, index) => {
                return (
                  <button
                    key={index}
                    className={
                      currentSlide != index
                        ? "current-indicator hidden-indicator"
                        : "current-indicator"
                    }
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                );
              })
            : null}
        </span>
      </div>
    </div>
  );
}
