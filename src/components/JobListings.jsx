import React, { useEffect, useState } from 'react'

import SingleJobListing from './SingleJobListing'
import Spinner from './Spinner';


const JobListings = ({isHome=false}) => {
  // console.log(jobs);
  
  const [jobs ,setJobs ]= useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{ 
    const fetchJobs = async() => {
      try {
        const ApiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
        const res = await fetch(ApiUrl);
        const data = await res.json();
          setJobs(data);
          // console.log("helllo ");
        } catch (error) {
          console.log("Error found!! ");
        } finally {
          setLoading(false);
        }
      }
      fetchJobs();
    }, [])
    
    const Header = isHome ? 'Browse Jobs' : 'All Jobs';
    return (
      <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
         {Header}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            { loading ? (<Spinner loading={loading} />) : 
            (<>
            {jobs.map((job)=>(
              <SingleJobListing key={job.id} job={job}  />
            ))}
            </>)
            }
             
        </div>
      </div>
    </section>
)
}

export default JobListings