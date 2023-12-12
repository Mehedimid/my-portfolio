import React from "react";
import Title from "../../components/Title";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "../../components/ProjectCard";

function Project(props) {
    const [projects] = useProjects()
    console.log(projects)



  return (
    <div className="py-32">
      <div className="">
         <Title>projects</Title>
      </div>

      <div>
        {
            projects?.map((item, idx) => <ProjectCard key={idx} item={item}></ProjectCard>)
        }
      </div>

    </div>
  );
}

export default Project;
