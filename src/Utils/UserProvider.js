import React, {useEffect,useState } from "react";

export const UserContext = React.createContext({ user: null });

function UserProvider(props) {
    const [user, setUser] =  useState(null)
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async userAuth => {
            const user = await firebase.auth().currentUser;
            setUser(user);
          });
    }, [])
    return ( 
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    )
  }
 export default UserProvider;