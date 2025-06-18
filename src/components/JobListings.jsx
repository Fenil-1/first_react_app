import React from 'react'
import jobs from '../jobs.json'
import SingleJobListing from './SingleJobListing'

const JobListings = ({isHome=false}) => {
    // console.log(jobs);
    const listOfJob = isHome ? jobs.slice(0,3) : jobs ;
    const Header = isHome ? 'Browse Jobs' : 'All Jobs';
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
         {Header}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
            {listOfJob.map((job)=>(
              <SingleJobListing key={job.id} job={job}  />
            ))}

        </div>
      </div>
    </section>
  )
}

export default JobListings