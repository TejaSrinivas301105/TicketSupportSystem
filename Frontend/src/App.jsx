import React from 'react'
import {useRoutes,Navigate} from 'react-router'
import DashBoard from './Pages/DashBoard'
import Tickets from './Pages/Tickets'
import NewTickets from './Pages/NewTickets'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Help from './Components/Help'
import TicketResponse from './Pages/TicketResponse'
import Report from './Pages/Report'
import ProtectedRoute from './utils/ProtectedRoute'

const App = () => {

  function CustomRoutes(){
    const elements = useRoutes([
      {
        path: '/',
        element: <Navigate to="/Login" />
      },
      {
        path:'/DashBoard',
        element:<ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
      },
      {
        path:'/Tickets',
        element:<Tickets/>
      },
      {
        path:'/NewTickets',
        element:<NewTickets/>
      },
      {
        path:'/Login',
        element:<Login/>
      },
      {
        path:'/Signup',
        element:<Register/>
      },
      {
        path:'/HelpUs',
        element:<Help/>
      },
      {
        path:'/Tickets/:id',
        element:<TicketResponse/>
      },
      {
        path:'/Report',
        element:<Report/>
      }
    ])
    return elements
  }
  return (
    <div data-theme='caramellatte'>

      <CustomRoutes />
    </div>
  )
}

export default App
