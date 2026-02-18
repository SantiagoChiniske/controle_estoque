import { useState } from "react"
import Logo from "../assets/Logo.svg"
import axios from "axios"

export default function Login (){
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")


    function hadlerLogin(e){
        e.preventDefault()

        axios.post("http://localhost:3000/user",{
            user,
            password
        }

        ).then(res =>{
            const data = res.data
            console.log(data.token)
        }).catch(error =>{console.log(error)})


    }


    return (
        <div className='bg-secondary-light flex justify-center items-center h-dvh '>
            <div className="flex items-center flex-col gap-6 p-5 shadow-2xl  rounded bg-secondary-dark">
                 <img src={Logo} alt=""  className="w-35"/>
                <h1 className="text-white font-bold text-2xl my-2">Login</h1>
                
                <span className="flex flex-col justify-end items-end">
                    <input type="text" name="user" onChange={(e)=>{setUser(e.target.value)}}  placeholder="Insira seu usuario" className="text-white border-b-primary border-b-1 py-3 mb-5  placeholder:text-white border-0 outline-none focus:outline-none focus:ring-0" />
                    <input type="password" name="password"  onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Insira sua senha" className="text-white border-b-primary border-b-1 py-3 mb-5  placeholder:text-white border-0 outline-none focus:outline-none focus:ring-0"/>

                    <button className="w-25 bg-primary px-5 py-2 rounded-xl" onClick={hadlerLogin}>Entrar</button>
                </span>
            </div>
            
        </div>
    )
}