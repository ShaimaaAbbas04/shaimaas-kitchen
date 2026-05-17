import { useState } from 'react';
import menuData from '../data/menuData';
import useFavorites from '../hooks/useFavorites';

const categories = ['appetizers', 'pasta', 'mains', 'desserts', 'drinks'];

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { toggleFavorite, isFavorite } = useFavorites();

  const filteredItems = activeCategory === 'all'
    ? menuData
    : menuData.filter(item => item.category === activeCategory);

  const visibleCategories = activeCategory === 'all'
    ? categories
    : [activeCategory];

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Our Menu</h1>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="filter-buttons">
            <button
              className={'filter-btn' + (activeCategory === 'all' ? ' active' : '')}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={'filter-btn' + (activeCategory === cat ? ' active' : '')}
                onClick={() => setActiveCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {visibleCategories.map(cat => {
            const items = filteredItems.filter(item => item.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat} className="menu-section">
                <h2>{cat.charAt(0).toUpperCase() + cat.slice(1)}</h2>
                <div className="menu-items">
                  {items.map(item => (
                    <div key={item.id} className="menu-item">
                      <div className="menu-item-info">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
                      <div className="menu-item-right">
                        <span className="menu-item-price">{item.price}</span>
                        <button
                          className="heart-btn"
                          onClick={() => toggleFavorite(item.id)}
                          aria-label={isFavorite(item.id) ? 'Remove from favorites' : 'Add to favorites'}
                        >
                          {isFavorite(item.id) ? '♥' : '♡'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Menu;
