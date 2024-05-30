import css from "./Projects_page.module.css";
import { Link } from "react-router-dom";
const ProjectList = ({ project }) => {
  return (
    <div className="col">
      <div className={` ${"card"} ${css.projectItem}`}>
        <img
          src={`${project.ImageSrc}`}
          className={` ${"card-img-top"} ${css.projectImage}`}
          alt="image"
        />
        <div className={` ${"card-body"} ${css.projectBody}`}>
          <h5 className={` ${"card-title"} ${css.projectTitle}`}>
            {project.Name}
          </h5>
          <p className={` ${"card-text"} ${css.projectText}`}>
            {project.Description}
          </p>
          <Link
            to={`${project.Link}`}
            className={` ${css.projectButton} ${"btn"} ${"btn-primary"}`}
          >
            Go to Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
