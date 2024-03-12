import React from 'react'
import { accountService } from "@/_services/accountService"
import { useNavigate } from 'react-router-dom'

function Header() {
  let navigate = useNavigate()
  const logout = () => {
        accountService.logout()
        navigate('/')
  }

  return (
    <div className='AHeader'>Header
    
    <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Header