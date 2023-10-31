import { createContext, useState } from 'react';
import NavigationStack from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
export const loginInfo=createContext()

function App() {
  const[login,setlogin]=useState(false)
  const loginflag=()=>{
    setlogin(true)
  }
  return (
    <loginInfo.Provider value={{login:login,loginflag:loginflag}}>
<NavigationStack/>
      </loginInfo.Provider>
     
   
   
    
  );
}

export default App;
