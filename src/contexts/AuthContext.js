import { createContext, useState,useEffect, useContext } from "react";
import { confirmResetPassword, getCurrentUser } from 'aws-amplify/auth';
import { DataStore, Predicates } from 'aws-amplify/datastore';
import { User } from "../models";
// import {Auth, Amplify, Predicates} from 'aws-amplify';
// import { getCurrentUser, AuthUser } from 'aws-amplify/auth';
// import { DataStore, AuthModeStrategyType } from 'aws-amplify/datastore';
  

const AuthContext = createContext({})

const AuthContextProvider = ({children})=>{

    const [authUser, setAuthUser] = useState(null)
    const [dbUser, setDbUser] = useState(null)
    const sub = authUser?.userId;

    // This is one method to use 'await'
    // const fetchUser = async ()=>{
    //     try{
    //         const res = await getCurrentUser()
    //         console.log(authUser)   
    //         console.log('checking if this is authUser:', authUser) 
    //     }catch(err){
    //         console.log('This is the error',err)
    //     }
        
    // }

    // useEffect(()=>{
    //     fetchUser()
    //     // getCurrentUser().then((res)=>setAuthUser(res))
    //     // console.log("this is authUser:", authUser)
    //     // console.log('this is sub:', sub)
    // },[]);

     useEffect(() => {
        getCurrentUser().then((res) => {
            setAuthUser(res);
            console.log('Updated authUser:', res);
            console.log('This is sub:',sub)
        }).catch((err) => {
            console.log('Error fetching current user:', err);
        });
    }, []);


    // useEffect(()=>{
    //     DataStore.query(User, (user)=>user.sub.eq(sub)).then((users)=>setDbUser(users[0]))
    //     console.log(dbUser)
    //     console.log('checking if this is dbUser:', dbUser)
    //     // Amplify.Logger.LOG_LEVEL = "DEBUG";
    //     // DataStore.observeQuery(User)
    //     // DataStore.delete(User, Predicates.ALL)
    //     // DataStore.clear()
    // }, [sub])
    useEffect(() => {
        if (sub) {
            DataStore.query(User, (user) => user.sub.eq(sub)).then((users) => {
                setDbUser(users[0]);
                console.log('Updated dbUser:', users[0]);
                console.log('this is dbuser',dbUser)
                // Amplify.Logger.LOG_LEVEL = "DEBUG";
                // DataStore.observeQuery(User)
                // DataStore.delete(User, Predicates.ALL)
                // DataStore.clear()
            }).catch((error) => {
                console.log('Error fetching dbUser:', error);
            });
            console.log('see sub and dbuser:', sub,'dbusernkor:', dbUser)
        }
    }, [sub]);


    // This useEffect is for if I want to do things online only ie, I can delete things in the amplify studio and it will delete locally

    // useEffect(() => {
    //     const subscription = DataStore.observeQuery(
    //         User,
    //         user => user.sub.eq(sub)
    //     ).subscribe(snapshot => {
    //         const { items, isSynced } = snapshot;
    //         console.log(`[Snapshot] item count: ${items.length}, isSynced: ${isSynced}`);
    //         if (items[0]) {
    //             setDbUser(items[0])
    //         }
    //     });

    //     return () => {
    //         subscription.unsubscribe()
    //     }
    // }, [sub])
    // console.log("DB USER: ", dbUser)

    return(
        <AuthContext.Provider value={{authUser, dbUser, sub, setDbUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuthContext = ()=> useContext(AuthContext)