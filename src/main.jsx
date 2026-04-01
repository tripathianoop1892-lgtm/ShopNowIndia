import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from "react-router-dom"
import Card from "./Card/Card.jsx"
import Dashboard from "./Dashboard/Dashbord.jsx"
import ForgotPassword from "./ForgotPassword/Forgot Passwoard.jsx"
import Layout from "./Layout/MainLayout.jsx"
import Header from "./Header/Header.jsx"
import Sidebar from "./Sidebar/Sidebar.jsx"
import Medicinelist from './MdicineList/Medicinelist.jsx'
import AddMedicine from "./Addmedicine/Addmedicine.jsx"


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Dashboard/>
      },
      {
        path:"medicine",
        element:<App/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      {/* <App /> */}
      
      
      
      <RouterProvider router={router}/>
      
    
  </StrictMode>
)