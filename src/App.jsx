import React from 'react'
import './index.css'
import HomePage from './pages/HomePage';
import {Route , createBrowserRouter , createRoutesFromElements , RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import ViewJobs from './pages/ViewJobs';
import AddJobs from './pages/AddJobs';
import NotFound from './pages/NotFound';
import SingleJobs,{loader} from './pages/SingleJobs';
import EditJobs from './pages/EditJobs';

const App = () => {
  // Add new job
  const addingnewjob =async (newJob) => {
    const res = await fetch('/api/jobs',{
      method : 'POST',
      headers :{
        'Content-Type' : 'application.json'
      },
      body : JSON.stringify(newJob)
    });
    return
  }
  // Delete job
  const deleteJob = async(id) =>{
    const res = await fetch(`/api/jobs/${id}`,{method : 'DELETE'})
    return;
  }

  //  Edit job
  const editJob = async(editedJob)=>{ 
   const res = await fetch(`/api/jobs/${editedJob.id}`,{
    method : 'PUT',
    headers : {
      'content-type' : 'application/json'
    },
    body : JSON.stringify(editedJob)
   })
   return;
  }
  // Routing ..
  const router = createBrowserRouter(
    createRoutesFromElements(
    
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}  />
      <Route path='/jobs' element={<ViewJobs />}  />
      <Route path='/jobs/:id' element={<SingleJobs deleteJob={deleteJob}/>} loader={loader} />
      <Route path='/edit-jobs/:id' element={<EditJobs editJob={editJob}  />} loader={loader}/>
      <Route path='/add-job' element={<AddJobs addjobs={addingnewjob} />}  />
      <Route path='*' element={<NotFound />}  />
    </Route>
  ));

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App