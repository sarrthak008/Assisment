import api from "@/config/axios";

const loginUser = async(username , password)=>{
   if(!username || !password){
      throw new Error("Enter the Credentials.")
   }
   try {
       let response = await api.post("/auth/login",{username,password})
       return(response.data)
   } catch (error) {
       throw error
   } finally{
    console.warn(`RUNNING LOGIN HANDER....`)
   }
}


export{
    loginUser
}