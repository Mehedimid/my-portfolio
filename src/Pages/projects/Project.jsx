import React from "react";
import Title from "../../components/Title";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "../../components/ProjectCard";

function Project(props) {
    const [projects] = useProjects()

  return (
    <div className="py-32 w-11/12 mx-auto">
      <div className="">
         <Title>my projects</Title>
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
