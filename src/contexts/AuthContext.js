// import { createContext, useState,useEffect, useContext } from "react";
// import {Auth, Amplify, Predicates} from 'aws-amplify';
// import { getCurrentUser, AuthUser } from 'aws-amplify/auth';
// import { DataStore, AuthModeStrategyType } from 'aws-amplify/datastore';
  

// const AuthContext = createContext({})

// const AuthContextProvider = ({children})=>{

//     const [authUser, setAuthUser] = useState(AuthUser)
//     const [dbUser, setDbUser] = useState(null)
//     const sub = authUser?.attributes?.sub;

//     const fetchUser = async ()=>{
//         const res = await getCurrentUser()
//         setAuthUser(res)
//     }

//     useEffect(()=>{
//         fetchUser()
//     },[]);

//     DataStore.configure({
//         authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
//       });

//     useEffect(()=>{
//         DataStore.query(User, (user)=>user.sub.eq(sub)).then((users)=>setDbUser(users[0]))
//         console.log(dbUser)
//         // Amplify.Logger.LOG_LEVEL = "DEBUG";
//         // DataStore.observeQuery(User)
//         // DataStore.delete(User, Predicates.ALL)
//     }, [sub])


//     // This useEffect is for if I want to do things online only ie, I can delete things in the amplify studio and it will delete locally

//     // useEffect(() => {
//     //     const subscription = DataStore.observeQuery(
//     //         User,
//     //         user => user.sub.eq(sub)
//     //     ).subscribe(snapshot => {
//     //         const { items, isSynced } = snapshot;
//     //         console.log(`[Snapshot] item count: ${items.length}, isSynced: ${isSynced}`);
//     //         if (items[0]) {
//     //             setDbUser(items[0])
//     //         }
//     //     });

//     //     return () => {
//     //         subscription.unsubscribe()
//     //     }
//     // }, [sub])
//     // console.log("DB USER: ", dbUser)

//     return(
//         <AuthContext.Provider value={{authUser, dbUser, sub, setDbUser, }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthContextProvider;

// export const useAuthContext = ()=> useContext(AuthContext)