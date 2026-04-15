import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter } from "react-router";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Component/Root.jsx';
import Home from './Component/Home.jsx';
import Timeline from './Component/Timeline.jsx';
import Stats from './Component/Stats.jsx';
import Context from './Component/Context.jsx';
import FriendDetails from './Component/FriendDetails.jsx';
import { ToastContainer } from 'react-toastify';
import Error from './Component/Error.jsx';

const router=createHashRouter([
{
  path:'/',
  Component:Root,
  children:[
    {
      index:true,
      Component:Home
    },
    {
      path:'/timeline',
      Component:Timeline
    },
    {
      path:'/stats',
      Component:Stats
    },
    {
      path:'/friend-details/:id',
      loader:()=>fetch(`${import.meta.env.BASE_URL}data.json`),
      Component:FriendDetails
    }
  ],
  errorElement:<Error></Error>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Context>
     <RouterProvider router={router}></RouterProvider>
     <ToastContainer></ToastContainer>
   </Context>
  </StrictMode>,
)
