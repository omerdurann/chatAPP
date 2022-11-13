// //Kimlik Doğrulamayı Burada Yapıyoruz

// import { createContext, onChildChanged,useEffect, useState,
//   useContext,
//   useReducer, } from "react";


// export const UsersContext = createContext();

// export const UsersContextProvider = ({ children }) => {
//     const [Users, setUsers] = useState({});
  
//     useEffect(() => {
//       const getUsers = () => {
//         onChildChanged(Users, (uid) => {
//           setUsers(uid);
//           console.log(uid)
//         });
//       };
      
//       Users.uid && getUsers();
//     }, [Users.uid]);
    
//   const [state, dispatch] = useReducer(uid);
    
//     return (
//       <UsersContext.Provider value={{ data:state, dispatch }}>
//         {children}
//       </UsersContext.Provider>
//     );
//   };
