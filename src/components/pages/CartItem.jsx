import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from '../redux/CartSlice';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <div className="navbar-brand">🌿 Paradise Nursery</div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Plants</a></li>
          <li className="cart-link">
            <a href="/cart">
              🛒 Cart
              <span className="cart-count">{totalQuantity}</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="cart-container">
        <h2 className="cart-title">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-thumbnail"
                  />

                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-unit-price">
                      Unit price: ${item.price.toFixed(2)}
                    </p>
                    <p className="cart-item-subtotal">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => handleDecrement(item.id)}
                      >
                        −
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3 className="cart-total">
                Total Amount: ${totalAmount.toFixed(2)}
              </h3>

              <div className="cart-actions">
                <button
                  className="continue-shopping-btn"
                  onClick={handleContinueShopping}
                >
                  Continue Shopping
                </button>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;