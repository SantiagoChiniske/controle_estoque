import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import Estoque from './pages/estoque.jsx'
import Home from './pages/home.jsx'
import Adicionar from './pages/adiconar.jsx'
import ListaProdutos from './pages/listaProdutos.jsx'
import Product from './pages/product.jsx'
import Login from './pages/login.jsx'
const router =  createBrowserRouter ([
    {
    path:'/',
    element: (
         <Home/>
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
         <Estoque/>
    )
  },
    {
    path:'/produto/editar/:id',
    element: (
         <Product/>
    )
  },
    {
    path:'/adicionar',
    element: (
         <Adicionar/>
    )
  },
    {
    path:'/listar/produtos',
    element: (
         <ListaProdutos/>
    )
  },
  {
    path:'*',
    element:{}
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
