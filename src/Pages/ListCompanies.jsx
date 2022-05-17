import React from 'react'
import api from '../api/fetchCompany';
import { useEffect, useState } from 'react';
// import ListProjectsByCompany from './ListProjectsByCompany';
import { useNavigate } from 'react-router-dom';

const ListCompanies = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);


  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.get('Companies');
        setCompanies(response.data);
        // console.dir(response.data);
      } catch (error) {
        console.dir(error.response);
      }
    }
    fetch();
  }, [])

  const handleClick = (id) => {
    // setCompanies(name);
    // console.log(`${name}`);
    navigate(`/company/${id}`);
  }


  return (
    <div>
      {companies.map((company) => (
        <button key={company.companyId} onClick={() => handleClick(company.companyId)}>
          {company.name}
        </button>
      ))}
    </div>
  )
}

export default ListCompanies