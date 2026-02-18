import { useEffect, useState } from 'react'
import Header from '../components/Header/Header.jsx'
import axios from "axios"


export default function adicionar(){
    const [infocategoria,setInfoCategoria] = useState([])
    const [nome,setNome]= useState("")
    const [quantidade,setQuantidade]= useState("")
    const [categoria,setCategoria]= useState("")
  
 useEffect(()=>{

  const useEffect = async ()=>{
    axios.get("http://localhost:3000/estoque").then(response =>{
      setInfoCategoria(response.data)
    }).catch(error=>{console.log(error)})

  }
useEffect()
    
   },[])

    function envioDeInformacoes(e){
     e.preventDefault()
     if(nome &&  quantidade &&  categoria){
                axios.post("http://localhost:3000/adicionar/produto",{
             nome,
        quantidade,
        categoria
        }).then(response =>{
      console.log(response.data)
    }).catch(error=>{console.log(error)})
          setNome("")
        setQuantidade("")
        setCategoria("")
        alert("Produto inserido")
        return
     }else{
        alert("Valores vazios")
     }


  
  
    }
    
    
    return(
       <div className='bg-secondary flex flex-row'>
             <Header/>
             <main className='m-10'>
                <h1 className='text-white text-2xl font-medium'>Adicionar:</h1>

                <form action="" className='flex flex-col text-white  gap-10 mt-10'>                 

                     <input type="text" placeholder='Nome do produto'  className='placeholder:text-white border-b-2 border-primary py-3   outline-none' onChange={(e)=>setNome(e.target.value)} value={nome} required/>
                    <input type="number" placeholder='Quantidade' className='placeholder:text-white border-b-2 border-primary py-3   outline-none' onChange={(e)=>setQuantidade(e.target.value)} value={quantidade} required/>
                    <label >Escolha uma categoria:</label>
                    <select name="opcoes" id="opcoes" className='placeholder:text-white border-b-2 border-primary   outline-none' onClick={(e)=>setCategoria(e.target.value)} placeholder="Selecione a categoria" required>
                        <option value="">Selecione a Categoria</option >
                        {infocategoria.map(categoria=>(
                                <option key={categoria.id} value={categoria.categoria} className='bg-secondary' >{categoria.categoria}</option>
                    ))}
                    </select>
                    

                    <button onClick={envioDeInformacoes}  className=' bg-primary text-white w-35 p-3 rounded-xl'>Adicionar</button>


                </form>
                
                
       
             </main>
           </div>
    )
}