import { useEffect, useState } from 'react'
import Header from '../components/Header/Header.jsx'
import axios from "axios"
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function ListaProdutos (){
    const [produtos,setProdutos] = useState([])
    const [todosProdutos, setTodosProdutos] = useState([])
    const[pesquisa,setPesquisa]=useState("")
  
 useEffect(()=>{

  const useEffect = async ()=>{
    axios.get("http://localhost:3000/estoque").then(response =>{
      setProdutos(response.data)
      setTodosProdutos(response.data)
    }).catch(error=>{console.log(error)})

  }
useEffect()
    
   },[])

   function deleterValor(id){
    const valorConfirm =confirm(`Deseja excluir o ID:${id}?`)
    console.log(valorConfirm)
    if(valorConfirm === true){
    axios.delete(`http://localhost:3000/deletar/produto/${id}`).then(response =>{
      console.log(response.data)
    }).catch(error=>{console.log(error)})
    setProdutos(produtos => produtos.filter(produto=> produto.id !== id))
    alert("Produto excluido !")
        
    }
    else {
        alert("Cancelado a exclusao")
    }
    

   }
   function pesquisaProduto(e){
    e.preventDefault();
    const valorProduto = e.target.value

    const newProduto = todosProdutos.filter(produto=>{
      const nomeProduto = produto.nome.toLowerCase()
      return nomeProduto.includes(valorProduto.toLowerCase())  ;
    })

    console.log(newProduto)
    setProdutos(newProduto)

   }

  return (
    <div className='bg-secondary flex flex-row'>
      <Header/>
      <main className='m-10'>
        <div className='flex justify-between'>
     <h1 className='text-white text-2xl font-medium'>Lista de produtos:</h1>
         <input type="text" name="" id=""  placeholder='Pesquise pelo produto' className=' text-white' onChange={pesquisaProduto}/>
        </div>
        
              <table className='text-white w-200 text-center '>
                <thead className=''>
                    <tr>
                        <th className='py-5'>ID</th>
                        <th>NOME</th>
                        <th>Quantidade</th>
                        <th>Categoria</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
         
        {produtos.map(produto =>(
            <tbody key={produto.id} className='gap-5 text-center odd:bg-secondary-light even:bg-secondary-dark'>
                <tr>
                    <td className='p-10'><Link to={`/produto/editar/${produto.id}`}>{produto.id}</Link> </td> 
                    <td> {produto.nome}</td>
                    <td>{produto.quantidade}</td>
                    <td>{produto.categoria}</td>
                    <td className='text-center'>
                        <button onClick={()=>deleterValor(produto.id)} className='hover:text-primary'><FaTrashAlt /></button>
                    </td>
                </tr>
            </tbody>
               

        ))}
                    </table>
         

      </main>
    </div>
  )
    
}