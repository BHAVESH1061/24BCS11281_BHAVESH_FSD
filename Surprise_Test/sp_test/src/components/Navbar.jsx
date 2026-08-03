import { useUser } from '../hooks/useUser'

function Navbar({ cartCount }) {
  const user = useUser()

  return (
    <header className="navbar">
      <div>
        <h2>Quick Bite</h2>
        <p>Food Ordering App</p>
      </div>
      <div className="navbar-details">
        <p>Welcome, {user?.name || 'Guest'}</p>
        <p>Location: {user?.location || 'Unknown'}</p>
        <p className="cart-pill">Cart: {cartCount} item{cartCount === 1 ? '' : 's'}</p>
      </div>
    </header>
  )
}

export default Navbar
