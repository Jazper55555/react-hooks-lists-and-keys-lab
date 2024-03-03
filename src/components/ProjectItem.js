import React from "react";

function ProjectItem({ name, about, technologies }) {
  let techId = 1

  const technologyNames = technologies.map((tech) => {
    return <span key={techId++}>{tech}</span>
  })

  console.log(technologyNames)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyNames}
      </div>
    </div>
  );
}

export default ProjectItem;
