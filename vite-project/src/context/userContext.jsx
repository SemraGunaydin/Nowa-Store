import  { createContext } from 'react';


// createContext ile contex yapisinin kurulumu yapilir
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const name ="Semra";
    const surname ="Gunaydin";
  return (
   <UserContext.Provider value={{name,surname}}>
    {/*  */}
    {children}
   </UserContext.Provider>
  )
}

export {UserProvider, UserContext};