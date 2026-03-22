// useContext allows this component to consume global state
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// Import the CartContext created using React Context API
import { CartContext } from '../content/CartContent';

const Cart = () => {

  // Access global cart state and actions from Context (no prop drilling)
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  // Compute total price from global cart state
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Helper function to format currency (Philippine peso format)
  const formatPrice = (value) => {
    return value.toLocaleString('en-PH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold">Shopping Cart</h2>

      {/* Conditional rendering based on global cart state */}
      {cart.length === 0 && (
        <div className="alert alert-orange text-center py-5">
          <i className="fas fa-shopping-cart" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}></i>
          <h5>Your cart is empty</h5>
          <p className="mb-3">Start shopping to add items to your cart!</p>
          <Link to="/products" className="btn btn-primary">
            Start Shopping
          </Link>
        </div>
      )}

      {/* Render cart items from Context state */}
      {cart.map(item => (
        <div key={item.id} className="card mb-3 shadow-sm cart-item-card">
          <div className="card-body p-3">
            <div className="row align-items-center g-2">

              {/* Product Info (data comes from Context) */}
              <div className="col-12 col-md-5">
                <h5 className="mb-1 fw-bold">{item.name}</h5>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-orange">₱{formatPrice(item.price)}</span>
                  <small className="text-muted">per item</small>
                </div>
              </div>

              {/* Quantity Controls (trigger Context functions) */}
              <div className="col-12 col-md-3">
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="btn btn-outline-orange btn-sm"
                    style={{ width: '32px', height: '32px', padding: 0 }}
                  >
                    −
                  </button>

                  <span className="fw-bold" style={{ minWidth: '30px', textAlign: 'center' }}>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="btn btn-outline-orange btn-sm"
                    style={{ width: '32px', height: '32px', padding: 0 }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Subtotal and Remove Button */}
              <div className="col-12 col-md-4 text-center text-md-end">
                <div className="mb-1">
                  <small className="text-muted">Subtotal:</small>
                  <h6 className="mb-0 fw-bold text-orange">₱{formatPrice(item.price * item.qty)}</h6>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  <i className="fas fa-trash-alt"></i> Remove
                </button>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Total Section (derived from Context state) */}
      {cart.length > 0 && (
        <div className="card shadow-lg mt-5 cart-total-card">
          <div className="card-body">
            <div className="row align-items-center g-2">
              <div className="col-12 col-md-6">
                <h4 className="mb-0">
                  <span className="text-muted">Order Total:</span>
                  <br />
                  <span className="text-orange fw-bold" style={{ fontSize: '1.8rem' }}>₱{formatPrice(total)}</span>
                </h4>
              </div>

              <div className="col-12 col-md-6 text-center text-md-end">
                <Link to="/checkout" className="btn btn-primary btn-lg px-5">
                  <i className="fas fa-arrow-right"></i> Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;