import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { UserProvider } from './context/UserContext'
import './App.css'

function App() {
  const user = {
    name: 'Rahul Sharma',
    email: 'rahul@gmail.com',
    location: 'Chandigarh',
  }

  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    console.log(`Cart updated. Total items: ${cartCount}`)
  }, [cartCount])

  return (
    <UserProvider value={user}>
      <div className="app-shell">
        <Navbar cartCount={cartCount} />
        <Home user={user} onAddToCart={() => setCartCount((count) => count + 1)} />
      </div>
    </UserProvider>
  )
}

export default App
