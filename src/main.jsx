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
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
