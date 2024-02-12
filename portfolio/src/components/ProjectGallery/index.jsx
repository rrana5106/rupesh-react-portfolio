import projects from "../../assets/project.json";
import Card from "../Cards/Cards";
import "./ProjectGallery.css"

function ProjectGallery() {
  return (
    <>
      <div className="container-fluid content" id="work">
        <h2 className="mt-4 text-center sectionHeading">Project</h2>

        <div className="row valueProp">
          {projects.map((project => {
            
            return <Card project={project} key={project.title}/>;
          }))}
        </div>
      </div>
    </>
  );
}

export default ProjectGallery;
