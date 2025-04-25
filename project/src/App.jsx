import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Form from './components/form'
import 'bootstrap/dist/css/bootstrap.min.css';

import State from './components/state'
import FetchEccomercialApi from './day-2/useEffecthook'
import ReducerHook from './day 3 useReducer/useReducer';
import ValueMemorize from './day-4-useMemo/memorizevar';
import Callback1 from './day-4-useMemo/Callback1';
import Registration from './webstore-frontend/user/registration';
import {Routes, Route} from 'react-router-dom'
import Login from './webstore-frontend/user/login'
import Userhome from './webstore-frontend/user/userhome'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './webstore-frontend/admin/adminlogin';
import AdminHome from './webstore-frontend/admin/adminHome';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path='/register' element = {<Registration/>}/>
      <Route path='/userhome' element = {<Userhome/>}/>
      <Route path='/adminhome' element = {<AdminHome/>}/>
      <Route path='/adminlogin' element = {<AdminLogin/>}/>

    </Routes>
    
    </>
  )
}

export default App
