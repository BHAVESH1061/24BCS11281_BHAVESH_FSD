import Restaurant from './Restaurant'

function Home({ user, onAddToCart }) {
  return (
    <main className="home">
      <section className="hero-card">
        <p className="hero-badge">Fresh meals, fast delivery</p>
        <h1>Quick Bite - Food Ordering App</h1>
        <p className="hero-text">Enjoy your favorite dishes with a simple and smooth ordering experience.</p>
      </section>

      <Restaurant user={user} onAddToCart={onAddToCart} />
    </main>
  )
}

export default Home
