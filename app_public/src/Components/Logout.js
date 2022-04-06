import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

export default function Logout() {

  const history = useHistory();
  useEffect(() => {
    if (sessionStorage.getItem('userData')) {
      sessionStorage.clear();
    }

    window.location.reload();
    history.push('/login');
  })
  return (
    <>

    </>
  )
}
