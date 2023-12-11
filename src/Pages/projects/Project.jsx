import React from "react";
import Title from "../../components/Title";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "../../components/ProjectCard";

function Project(props) {
    const [projects] = useProjects()
    console.log(projects)



  return (
    <>
      <div className="pt-36 mb-12">
         <Title>projects</Title>
      </div>

      <div>
        {
            projects?.map((item, idx) => <ProjectCard key={idx} item={item}></ProjectCard>)
        }
      </div>

    </>
  );
}

export default Project;
