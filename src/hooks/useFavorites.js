import { useState, useEffect } from 'react';

function useFavorites() {
  const [favorites, setFavorites] = useState(function() {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  useEffect(function() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(function(f) { return f !== id; }));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  function isFavorite(id) {
    return favorites.includes(id);
  }

  return { favorites, toggleFavorite, isFavorite };
}

export default useFavorites;
