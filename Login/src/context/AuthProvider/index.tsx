import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IAuthProvider, IContext, IUser } from './types'
import { GetUserLocalStorage, LoginRequest, SetUserLocalStorage } from './util'

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    const user = GetUserLocalStorage()
    if (user) {
      setUser(user)
    }
  }, [])

  function logout() {
    setUser(null)
    SetUserLocalStorage(null)
    console.log('Logout')
  }

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password)

    const payload = { token: response.token, email }

    setUser(payload)
    SetUserLocalStorage(payload)
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
// sucess authorization

// "email": "eve.holt@reqres.in",
// "password": "pistol"
