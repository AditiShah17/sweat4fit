import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function Logout() {
    const history = useHistory();
    useEffect(()=>
    {
       if(sessionStorage.getItem('userData'))
       {
        sessionStorage.clear(); 
       }

        history.push('/home');
    })

    
  return (
 <>

 </>
  )
}
