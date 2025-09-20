import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Pricing from './pages/home/Pricing.jsx'
import Services from './pages/home/Services.jsx'
import Blogs from './pages/home/Blogs.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route element={<App/>}>
     <Route path='/' element={<Home></Home>}/>
     <Route path='/pricing' element={<div>{<Pricing/>}</div>}/>
     <Route path='/services' element={<div>{<Services/>}</div>}/>
     <Route path='/blog' element={<div>{<Blogs/>}</div>}/>
     <Route path='/about' element={<div>About page</div>}/>


     <Route path='*' element={<div><ErrorPage/></div>}/>
     
    </Route>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
  </BrowserRouter>,
)
