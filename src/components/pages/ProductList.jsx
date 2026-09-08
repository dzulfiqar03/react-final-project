import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', price: 15, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=300' },
      { id: 2, name: 'Spider Plant', price: 12, image: 'https://images.unsplash.com/photo-1572686200518-4c72c9d3a97b?w=300' },
      { id: 3, name: 'Peace Lily', price: 18, image: 'https://images.unsplash.com/photo-1616500163246-742aa6faaea1?w=300' },
      { id: 4, name: 'Areca Palm', price: 25, image: 'https://images.unsplash.com/photo-1602923668104-8f9e03e77e18?w=300' },
      { id: 5, name: 'Boston Fern', price: 14, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300' },
      { id: 6, name: 'Rubber Plant', price: 20, image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=300' },
    ],
  },
  {
    category: 'Aromatic Plants',
    plants: [
      { id: 7, name: 'Lavender', price: 10, image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=300' },
      { id: 8, name: 'Rosemary', price: 8, image: 'https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=300' },
      { id: 9, name: 'Mint', price: 6, image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=300' },
      { id: 10, name: 'Basil', price: 7, image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=300' },
      { id: 11, name: 'Jasmine', price: 16, image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdcc9?w=300' },
      { id: 12, name: 'Lemon Balm', price: 9, image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b91?w=300' },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { id: 13, name: 'Aloe Vera', price: 11, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300' },
      { id: 14, name: 'Echeveria', price: 9, image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=300' },
      { id: 15, name: 'Jade Plant', price: 13, image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=300' },
      { id: 16, name: 'Haworthia', price: 8, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=300' },
      { id: 17, name: 'Barrel Cactus', price: 17, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300' },
      { id: 18, name: 'Sedum', price: 10, image: 'https://images.unsplash.com/photo-1459478309853-2c33a60058e7?w=300' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [addedIds, setAddedIds] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        id: plant.id,
        name: plant.name,
        price: plant.price,
        image: plant.image,
        quantity: 1,
      })
    );
    setAddedIds((prev) => [...prev, plant.id]);
  };

  return (
    <div className="product-list-page">
      <nav className="navbar">
        <div className="navbar-brand">🌿 Paradise Nursery</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Plants</Link></li>
          <li className="cart-link">
            <Link to="/cart">
              🛒 Cart
              <span className="cart-count">{totalQuantity}</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="product-list-container">
        {plantsArray.map((categoryGroup) => (
          <div key={categoryGroup.category} className="category-section">
            <h2 className="category-title">{categoryGroup.category}</h2>
            <div className="plants-grid">
              {categoryGroup.plants.map((plant) => {
                const isAdded = addedIds.includes(plant.id);
                return (
                  <div key={plant.id} className="plant-card">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-thumbnail"
                    />
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-price">${plant.price}</p>
                    <button
                      className={`add-to-cart-btn ${isAdded ? 'disabled' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded}
                    >
                      {isAdded ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;