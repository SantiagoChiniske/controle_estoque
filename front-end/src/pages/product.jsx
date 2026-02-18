import Header from '../components/Header/Header.jsx'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

export default function Product (){
    const { id } = useParams()
  
        const [nome,setNome]= useState("")
        const [quantidade,setQuantidade]= useState("")
  
 useEffect(()=>{

  const useEffect = async ()=>{
    axios.get(`http://localhost:3000/estoque/${id}`).then(response =>{
      setNome(response.data.nome)
      setQuantidade(response.data.quantidade)
    }).catch(error=>{console.log(error)})

  }
useEffect()

    
   },[])

   function envioDeInformacoes(e){
    e.preventDefault()

    try {
       axios.put(`http://localhost:3000/editar/produto/${id}`, {
        nome,
        quantidade
      }).then(res=>{console.log(res)}).catch(error=>{console.log(error)})

      alert("Produto atualizado com sucesso ✅")
    } catch (error) {
      console.log(error)
      alert("Erro ao atualizar produto ❌")
    }

   }

    return(
        <div className='bg-secondary flex flex-row'>
            <Header/>
            <main className='m-10'>
            <h1 className='text-white text-2xl font-medium'>Editar produto:</h1>
            <form action="" className='flex flex-col gap-10 placeholder:text-white text-white'>
                 <input type="text" placeholder='Nome do produto'  className='placeholder:text-white border-b-2 border-primary py-3   outline-none mt-10' onChange={(e)=>setNome(e.target.value)} value={nome} required/>
                <input type="number" placeholder='Quantidade' className='placeholder:text-white border-b-2 border-primary py-3   outline-none' onChange={(e)=>setQuantidade(e.target.value)} value={quantidade} required/>
                <button onClick={envioDeInformacoes}  className=' bg-primary text-white w-35 p-3 rounded-xl'>Adicionar</button>

            </form>

            </main>
        </div>
    )
}