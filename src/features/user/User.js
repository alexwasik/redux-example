import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from './userSlice'

export default function User() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  console.log('user', user);

  const handleLogin = () => {
    dispatch(
      login({
        name: 'Brodie',
        userName: 'brobro',
        email: 'brobro@testing.com'
      })
    )
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      <h1>User</h1>
      {user.name ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      {user.name && (
        <div>
          <p>Name: {user.name}</p>
          <p>Username: {user.userName}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  )

}
