import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '@/pages/Auth/Login'
import Error from'@/_utils/Error'

function AuthRouter() {
  return (
<Routes>
<Route index element={<Login/>}></Route>
<Route path='login' element={<Login/>}></Route>
<Route path='*' element={<Error/>}></Route>
<Route index element={<Login/>}></Route>
</Routes>
    )
}

export default AuthRouter