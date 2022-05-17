import React from 'react'
import api from '../api/fetchCompany';
import { useEffect, useState } from 'react';
import ListProjectsByCompany from './ListProjectsByCompany';

const ListCompany = () => {
  // console.log("rendering ListCompany");

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

  return (
    <div>
      {companies.map((company) => (
        <div key={company.companyId} className='companyContainer'>
          <div className='companyHeader'>
            <div className='companyName'>{company.name}</div>
            <div className='companyId'>{company.companyId}</div>
          </div>
          {/* <ListProjectsByCompany companyId={company.companyId} key={company.companyId} /> */}
        </div>
      ))}
    </div>
  )
}

export default ListCompany