import React from 'react'
import api from '../api/fetchProject';
import { useEffect, useState } from 'react';

const ListProjectsByCompany = ({ companyId }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        //console.log(apiPath);
        const response = await api.get(`Projects/Company/${companyId}`);
        setProjects(response.data);
        // console.dir(response.data);
      } catch (error) {
        console.dir(error.response);
      }
    }
    fetch();
  }, [])

  return (
    <div>
      {projects.map((project) => (
        <div key={project.projectId}>
          {project.projectId} = {project.name}
        </div>
      ))}
    </div>
  )
}

export default ListProjectsByCompany