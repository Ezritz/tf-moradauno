import { useState, useEffect } from 'react';
import { auth } from '../firebase/Config';
export function useAuth (){
    const [user, setUser] = useState({});
  
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
              setUser({email: user.email})
            } else{
                setUser({email: 'null'})
            }
        })
    }, [])
    console.log(user)
    
    return {user}

}