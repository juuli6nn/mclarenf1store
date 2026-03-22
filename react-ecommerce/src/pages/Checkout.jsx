import { useContext, useState } from 'react';
import { CartContext } from '../content/CartContent';

import { Link } from 'react-router-dom';

const Checkout = () => {
    // Get cart and clear function from global context
    const { cart, clearCart } = useContext(CartContext);

    // Form state (controlled components)
    const [form, setForm] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        payment: 'cod'
    });

    const [submitted, setSubmitted] = useState(false);
    const [finalTotal, setFinalTotal] = useState(0);

    // Compute total price
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = subtotal * 0.12; // 12% VAT
    const total = subtotal + tax;

    // Handle form input change
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value // dynamic property update
        });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault(); // stop page reload
        console.log("Form submitted!", form);

        if (!form.name || !form.email || !form.address || !form.phone) {
            console.log("Missing fields:", { name: form.name, email: form.email, address: form.address, phone: form.phone });
            alert("Please complete all fields");
            return;
        }

        console.log("All fields filled, processing order...");
        // Save total BEFORE clearing cart
        setFinalTotal(total);

        // Order is valid -> clear the cart
        clearCart();    // <- this resets cart to zero
        setSubmitted(true);
        console.log("Order submitted successfully!");
    };

    if (submitted) {
        return (
            <div className="container my-5">
                <div className="checkout-success">
                    <div className="success-icon mb-4">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <h2 className="fw-bold mb-2">Order Confirmed!</h2>
                    <p className="text-muted mb-4">Your order has been successfully placed</p>
                    
                    <div className="order-confirmation-details mb-4">
                        <div className="confirmation-item mb-3">
                            <small className="text-muted">Customer Name</small>
                            <p className="mb-0 fw-bold">{form.name}</p>
                        </div>
                        <div className="confirmation-item mb-3">
                            <small className="text-muted">Email</small>
                            <p className="mb-0">{form.email}</p>
                        </div>
                        <div className="confirmation-item mb-3">
                            <small className="text-muted">Delivery Address</small>
                            <p className="mb-0">{form.address}</p>
                        </div>
                        <div className="confirmation-item mb-3">
                            <small className="text-muted">Phone</small>
                            <p className="mb-0">{form.phone}</p>
                        </div>
                        <div className="confirmation-item">
                            <small className="text-muted">Payment Method</small>
                            <p className="mb-0 text-capitalize">{form.payment === 'cod' ? 'Cash on Delivery' : form.payment}</p>
                        </div>
                    </div>

                    <div className="order-total-box mb-4">
                        <small className="text-muted">Total Amount</small>
                        <h3 className="text-orange fw-bold mb-0">₱{finalTotal.toFixed(2)}</h3>
                    </div>

                    <div className="d-flex gap-3 flex-wrap">
                        <Link to="/products" className="btn btn-primary flex-grow-1">
                            Continue Shopping
                        </Link>
                        <Link to="/" className="btn btn-outline-orange flex-grow-1">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <h2 className="mb-4 fw-bold">Checkout</h2>
            
            <div className="row g-4">
                {/* Checkout Form */}
                <div className="col-lg-6">
                    <div className="checkout-form-card">
                        <h4 className="mb-4 fw-bold">Customer Information</h4>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label fw-600">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={form.name}
                                    className="form-control form-control-lg" 
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label fw-600">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={form.email}
                                    className="form-control form-control-lg" 
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label fw-600">Address</label>
                                <textarea 
                                    name="address" 
                                    value={form.address}
                                    className="form-control form-control-lg" 
                                    onChange={handleChange}
                                    placeholder="Street address, city, province"
                                    rows="3"
                                ></textarea>
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label fw-600">Phone</label>
                                <input 
                                    type="text" 
                                    name="phone" 
                                    value={form.phone}
                                    className="form-control form-control-lg" 
                                    onChange={handleChange}
                                    placeholder="+63 9XX XXX XXXX"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-600">Payment Method</label>
                                <select 
                                    name="payment" 
                                    value={form.payment}
                                    className="form-select form-select-lg" 
                                    onChange={handleChange}
                                >
                                    <option value="cod">Cash on Delivery</option>
                                    <option value="gcash">GCash</option>
                                    <option value="card">Credit Card</option>
                                </select>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-lg w-100"
                                onClick={(e) => {
                                    console.log("Button clicked!");
                                    handleSubmit(e);
                                }}
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
                
                {/* Order Summary */}
                <div className="col-lg-6">
                    <div className="order-summary-card">
                        <h4 className="mb-4 fw-bold">Order Summary</h4>
                        
                        <div className="order-items mb-4">
                            {cart.map(item => (
                                <div key={item.id} className="order-item mb-3 pb-3 border-bottom">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <p className="mb-1 fw-600">{item.name}</p>
                                            <small className="text-muted">Qty: {item.qty}</small>
                                        </div>
                                        <span className="fw-bold">₱{(item.price * item.qty).toFixed(2)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="order-totals">
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">Subtotal</span>
                                <span>₱{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                                <span className="text-muted">Tax (12%)</span>
                                <span>₱{tax.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span className="fw-bold">Total</span>
                                <span className="text-orange fw-bold" style={{ fontSize: '1.5rem' }}>₱{total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Checkout;