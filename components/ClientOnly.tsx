'use client'

interface ClientOnlyProps{
    children:React.ReactNode;

}
import {  useEffect, useState } from "react";
const ClientOnly:React.FC<ClientOnlyProps> = ({children}) => {
const[hasMounted,setHasMounted] = useState(false);
useEffect(()=>{
//  this means it has finished serverside rendering and it can be mounted
setHasMounted(true);
},[]
);
// but if it has not mounted
if(!hasMounted){
    return null;

}

  return (
    <>
      {children}
    </>
  )
}

export default ClientOnly;