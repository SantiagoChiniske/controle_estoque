import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom"

export default function  Header(){

    return(
        <aside className="w-55 h-screen  bg-black flex flex-col items-center">
            <Link to="/" className="p-10">
                <img src={Logo} alt=""  className="w-20"/>
            </Link>
            
            
            <nav className="flex flex-col items-center justify-center">

                <Link className="text-center text-white font-light py-4 border-b-primary border-b-1 w-45 m-2  focus:text-primary focus:font-bold hover:text-primary " to="/estoque">Estoque</Link>
                <Link className="text-center text-white font-light py-4 border-b-primary border-b-1 w-45 m-2  focus:text-primary focus:font-bold hover:text-primary " to="/adicionar">Adicionar</Link>
                <Link className="text-center text-white font-light py-4 border-b-primary border-b-1 w-45 m-2  focus:text-primary focus:font-bold hover:text-primary " to="/remove">Retirar</Link>
                <Link className="text-center text-white font-light py-4 border-b-primary border-b-1 w-45 m-2  focus:text-primary focus:font-bold hover:text-primary " to="/listar/produtos">Listar itens</Link>

            </nav>
        
        </aside>
    )
}