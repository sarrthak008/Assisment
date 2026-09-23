import { create } from "zustand";
import { persist } from "zustand/middleware";

const authStr ={
     user:null,
     token : null,
     isAuthenticated : false
}


const useAuthStore = create(
    persist(
        (set)=>({
            ...authStr,
            login:(user,token)=>{
                set({
                    user , token , isAuthenticated : true
                })
            },

            logout:()=>{
                set({...authStr})
            }
        }),{
            name : "auth-credentials"
        }
    )
)


export default useAuthStore