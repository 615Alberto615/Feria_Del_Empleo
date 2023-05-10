import {defineStore} from "pinia";
import {auth} from "../firebase";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword }from "firebase/auth";

export const useUserStore=defineStore("user",{
    state:()=>{
        return{
            user:null,
           // error:null,
            //loading:false
        }
    },
   actions:{
         async register(email,password){
            try{
                await createUserWithEmailAndPassword(auth,email,password);
            }catch(error){
                switch(error.code){
                    case "auth/email-already-in-use":
                        alert("El correo ya esta en uso");
                        break;
                    case "auth/invalid-email":
                        alert("El correo no es valido");
                        break;
                }
                return;
            }
            this.user = auth.currentUser;
            
            return { success: true };
            
         },
         async login(email,password){
            try{
                await signInWithEmailAndPassword(auth,email,password);
            }catch(error){
                switch(error.code){
                    case "auth/user-not-found":
                        alert("El usurio no ha sido encontrado");
                        break;
                    case "auth/wrong-password":
                        alert("Contraseña incorrecta");
                        break;
                }
                return;
            }
            this.user = auth.currentUser;
            return { success: true };
         }

   }  
      
});






