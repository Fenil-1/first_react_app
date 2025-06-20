import React from 'react'
import './index.css'
import HomePage from './pages/HomePage';
import {Route , createBrowserRouter , createRoutesFromElements , RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import ViewJobs from './pages/ViewJobs';
import AddJobs from './pages/AddJobs';
import NotFound from './pages/NotFound';
import SingleJobs,{loader} from './pages/SingleJobs';


const router = createBrowserRouter(
  createRoutesFromElements(
  
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />}  />
    <Route path='/jobs' element={<ViewJobs />}  />
    <Route path='/jobs/:id' element={<SingleJobs />} loader={loader} />
    <Route path='/add-job' element={<AddJobs />}  />
    <Route path='*' element={<NotFound />}  />
  </Route>
));


const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App