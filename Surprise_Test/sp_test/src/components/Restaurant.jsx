import FoodMenu from './FoodMenu'

function Restaurant({ user, onAddToCart }) {
  return (
    <section className="restaurant-card">
      <h2>Featured Restaurant</h2>
      <p className="restaurant-text">A curated menu of comfort food, made fresh for you.</p>
      <FoodMenu user={user} onAddToCart={onAddToCart} />
    </section>
  )
}

export default Restaurant
