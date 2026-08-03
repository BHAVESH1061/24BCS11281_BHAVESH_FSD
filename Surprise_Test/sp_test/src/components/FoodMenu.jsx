import UserInfo from './UserInfo'

const menuItems = [
  { name: 'Pizza', price: 299 },
  { name: 'Burger', price: 149 },
  { name:'Pasta', price : 199 },
]

function FoodMenu({ user, onAddToCart }) {
  return (
    <div className="food-menu">
      <h3>Food Menu</h3>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.name} className="food-item-card">
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
            </div>
            <button type="button" onClick={onAddToCart}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <UserInfo user={user} />
    </div>
  )
}

export default FoodMenu
