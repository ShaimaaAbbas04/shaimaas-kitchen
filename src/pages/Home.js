import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1>A Taste of the Mediterranean</h1>
          <p>Fresh ingredients. Family recipes. Warm hospitality.</p>
          <Link to="/menu" className="btn">View Our Menu</Link>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Welcome to Shaimaa's Kitchen</h2>
          <p>In the heart of West Bekaa, Shaimaa's Kitchen is a restaurant where we serve the kind of food we grew up on, simple seasonal dishes made from scratch every day.</p>
          <p>Our menu is rooted in Southern Italian and Mediterranean traditions, with a focus on fresh produce, good olive oil, and ingredients sourced locally whenever possible. Every plate that leaves our kitchen is made with care, because we believe good food brings people together.</p>
        </div>
      </section>

      <section className="featured">
        <div className="container">
          <h2 className="section-title">Featured Dishes</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="dish-card">
                <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80" alt="Spaghetti carbonara" />
                <div className="dish-card-body">
                  <h3>Spaghetti Carbonara</h3>
                  <p>Pancetta, egg yolk, pecorino romano, and cracked black pepper.</p>
                  <span className="price">$18</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dish-card">
                <img src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80" alt="Wood-fired branzino" />
                <div className="dish-card-body">
                  <h3>Wood-Fired Branzino</h3>
                  <p>Whole Mediterranean sea bass with lemon, rosemary, and capers.</p>
                  <span className="price">$32</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dish-card">
                <img src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80" alt="Tiramisu" />
                <div className="dish-card-body">
                  <h3>Tiramisu</h3>
                  <p>Layers of espresso-soaked ladyfingers, mascarpone cream, and cocoa.</p>
                  <span className="price">$10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
