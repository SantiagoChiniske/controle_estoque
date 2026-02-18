import axios from "axios"
import { Navigate } from "react-router-dom"

export default function authMiddleware({children}){
    const token = sessionStorage.getItem("token")

    if(token === null){
        return <Navigate to="/login" replace />
       
    }
    console.log(token)

   axios.get("http://localhost:3000/user/validation",{
    headers:{
        Authorization:`Bearer ${token}`
    }
   }).then(res =>{
    const user = res.data
    sessionStorage.setItem("role",user.role)
    sessionStorage.setItem("name", user.firstname)
      
    }).catch(error=>{console.log(error)})
   return children



}