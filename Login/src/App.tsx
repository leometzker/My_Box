import { AuthContext, AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout'
import { Login } from './components/Login'
import { Button } from 'antd'
import { useAuth } from './context/AuthProvider/useAuth'

export function App() {
  const auth = useAuth()
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProtectedLayout>
                <div>
                  <h2>Ola este é o componente profile</h2>
                  <button onClick={auth.logout}>Sair</button>
                  <Button onClick={auth.logout}>LOG OUT</Button>
                </div>
              </ProtectedLayout>
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
