import "bootstrap/dist/css/bootstrap.min.css";
import css from "./Projects_page.module.css";
import Project_list_container from "./Project_list_container";

import ProjectData from "./store/ProjectData.jsx";
import ProjectList from "./ProjectList.jsx";

const Projects_page = () => {
  return (
    <>
      <main className="ProjectPage_main">
        <div className={` ${css.mainHeading}`}>
          <h1>Projects In React js</h1>
        </div>

        <Project_list_container>
          {ProjectData.map((project) => (
            <ProjectList project={project} key={project.Id}></ProjectList>
          ))}
        </Project_list_container>
      </main>
    </>
  );
};
export default Projects_page;
