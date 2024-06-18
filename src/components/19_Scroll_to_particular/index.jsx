import { useEffect, useRef, useState } from "react";
import "./style.css";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

const ScrollToSection = () => {
  // const home = useRef();
  // const about = useRef();
  // const projects = useRef();
  // const contactme = useRef();

  const ref = useRef();
  const [presentSection, setSection] = useState("home");

  const data = [
    {
      section: "home",
      style: {
        background: "aqua",
      },
    },
    {
      section: "about",
      style: {
        background: "red",
      },
    },
    {
      section: "projects",
      style: {
        background: "green",
      },
    },
    {
      section: "contactme",
      style: {
        background: "red",
      },
    },
  ];

  const handletoup = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = (e) => {
    const newSection = e.target.dataset.val;
    console.log(newSection);
    setSection(newSection);
  };

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [presentSection]);
  return (
    <>
      <div className="scrolltoS-main">
        <div className="scrolltoS-buttons">
          {data && data.length
            ? data.map((button, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleClick}
                    data-val={button.section}
                    key={index}
                  >
                    {button.section}
                  </button>
                );
              })
            : null}
        </div>

        <div className="scrolltoS-content">
          {data.map((item, index) => {
            return (
              <div
                className="scrolltoS-content-section "
                style={item.style}
                // each time ref is given to different section according to presentsection state
                ref={item.section == presentSection ? ref : null}
                key={index}
              >
                {item.section}
                <HiArrowSmUp
                  onClick={handletoup}
                  className="scrolltoS-icon-up"
                ></HiArrowSmUp>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ScrollToSection;

{
  /* <button
    type="button"
    class="btn btn-success"
    onClick={handleClick}
    data-val="home"
    >
    Home
    </button>
  <button
  type="button"
    class="btn btn-success"
    data-val="about"
    onClick={handleClick}
    >
    About
  </button>
  <button
    type="button"
    class="btn btn-success"
    data-val="projects"
    onClick={handleClick}
  >
  Projects
  </button>
  
  <button
  type="button"
  class="btn btn-success"
  data-val="contactme"
  onClick={handleClick}
  >
  ContactMe
  </button>

  <button onClick={hanldeButton} data-val="home">
    scroll to{" "}
  </button> */
}

{
  /* <div className="scrolltoS-section" ref={home}>
        <div className="scrolltoS-content-section scrolltoS-home">
          Home
          <HiArrowSmUp
            onClick={handletoup}
            className="scrolltoS-icon-up"
          ></HiArrowSmUp>
        </div>
      </div>
      <div className="scrolltoS-content">
        <div
          className="scrolltoS-content-section scrolltoS-about"
          ref={about}
        >
          About
          <HiArrowSmUp
            onClick={handletoup}
            className="scrolltoS-icon-up"
          ></HiArrowSmUp>
        </div>
      </div>
      <div
        className=" scrolltoS-content-section scrolltoS-projects"
        ref={projects}
      >
        Projects
        <HiArrowSmUp
          onClick={handletoup}
          className="scrolltoS-icon-up"
        ></HiArrowSmUp>
      </div>
      <div
        className="scrolltoS-content-section scrolltoS-contactme"
        ref={contactme}
      >
        Contact Me
        <HiArrowSmUp
          onClick={handletoup}
          className="scrolltoS-icon-up"
        ></HiArrowSmUp>
      </div> */
}
