import React from 'react'
import Hero  from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import ViewJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
 
      <Hero title='Learning react!!' subtitle='Then moving to backend..' />
      <HomeCard />
      <JobListings isHome= 'true' />
      <ViewJobs />   
    </>
  )
}

export default HomePage