import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"
import './index.css'
import Estoque from './pages/estoque.jsx'
import Home from './pages/home.jsx'
import Adicionar from './pages/adiconar.jsx'
import ListaProdutos from './pages/listaProdutos.jsx'
import Product from './pages/product.jsx'
import Login from './pages/login.jsx'
import AuthMiddleware from "../src/middleware/auth.jsx"
const router =  createBrowserRouter ([
    {
    path:'/',
    element: (
      <AuthMiddleware>
                 <Home/>
      </AuthMiddleware>

    )
    
 
  },
      {
    path:'/login',
    element: (
         <Login/>
    )
    
 
  },
  {
    path:'/estoque',
    element: (
          <AuthMiddleware><Estoque/></AuthMiddleware>
         
    )
  },
    {
    path:'/produto/editar/:id',
    element: (
          <AuthMiddleware><Product/></AuthMiddleware>
         
    )
  },
    {
    path:'/adicionar',
    element: (
          <AuthMiddleware>  <Adicionar/></AuthMiddleware>
   
    )
  },
    {
    path:'/listar/produtos',
    element: (
          <AuthMiddleware><ListaProdutos/></AuthMiddleware>
         
    )
  },
  {
    path:'*',
    element:<Navigate to="/" />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
