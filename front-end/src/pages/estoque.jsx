import { useEffect, useState } from 'react'
import Header from '../components/Header/Header.jsx'
import axios from "axios"

export default function Estoque() {
  const [produtos,setProdutos] = useState([])
  
 useEffect(()=>{

  const useEffect = async ()=>{
    axios.get("http://localhost:3000/estoque").then(response =>{
      setProdutos(response.data)
    }).catch(error=>{console.log(error)})

  }
useEffect()
    
   },[])

  return (
    <div className='bg-secondary flex flex-row'>
      <Header/>
      <main className='m-10'>
         <h1 className='text-white text-2xl font-medium'>Disponivel:</h1>
         <div className='flex flex-wrap '>
          {produtos.map(produto=>(
            <div key={produto.id} className='w-45 h-48  bg-primary rounded-lg px-2 py-5 flex flex-col flex-wrap items-center justify-center  text-center mr-5 my-5'>
                <p className='text-7xl text-white font-bold mb-5'>{produto.quantidade}</p>
                <p className='text-white'>{produto.nome}</p>
            </div>
         ))}

         </div>
         

      </main>
    </div>
  )
}


