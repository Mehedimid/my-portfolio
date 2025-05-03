import { useState } from "react";
import Title from "../../components/Title";
import useProjects from "../../hooks/useProjects";
import useTeamProjects from "../../hooks/useTeamProjects";
import useSoloProjects from "../../hooks/useSoloProjects";
import ProjectCard from "../../components/ProjectCard";

function Project() {
  const [activeTab, setActiveTab] = useState("all");

  const [allProjects] = useProjects();
  const [teamProjects] = useTeamProjects();
  const [soloProjects] = useSoloProjects();

  const renderProjects = () => {
    if (activeTab === "team") return teamProjects;
    if (activeTab === "solo") return soloProjects;
    return allProjects;
  };

  return (
    <div className="py-32 w-11/12 mx-auto">
      <Title>my projects</Title>

      {/* Tabs */}
      <div className="flex justify-center gap-5 my-8">
        <button
          className={`shadow shadow-[#52D3D8] px-4 py-2 rounded-md font-semibold ${
            activeTab === "all"
              ? "bg-[#52D3D8] text-black"
              : "bg-[#200E3A] text-gray-300"
          }`}
          onClick={() => setActiveTab("all")}
        >
          All Projects
        </button>
        <button
          className={`shadow shadow-[#52D3D8] px-4 py-2 rounded-md font-semibold ${
            activeTab === "team"
              ? "bg-[#52D3D8] text-black"
              : "bg-[#200E3A] text-gray-300"
          }`}
          onClick={() => setActiveTab("team")}
        >
          Team Projects
        </button>
        <button
          className={`shadow shadow-[#52D3D8] px-4 py-2 rounded-md font-semibold ${
            activeTab === "solo"
              ? "bg-[#52D3D8] text-black"
              : "bg-[#200E3A] text-gray-300"
          }`}
          onClick={() => setActiveTab("solo")}
        >
          Solo Projects
        </button>
      </div>

      {/* Project List */}
      <div className=" gap-5">
        {renderProjects()?.map((item, idx) => (
          <ProjectCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Project;
