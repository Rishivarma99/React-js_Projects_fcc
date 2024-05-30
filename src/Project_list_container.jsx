import css from "./Projects_page.module.css";

const Project_list_container = (props) => {
  return (
    <>
      <div className={` ${css.mainProjectsList}`}>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_list_container;
