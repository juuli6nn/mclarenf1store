import { NavLink } from 'react-router-dom';
import logo from '../assets/images/MCLAREN-FULL-LOGO.png';
import { CartContext } from '../content/CartContent';
import { WishlistContext } from '../content/WishlistContext';
import { useContext } from 'react';

const Navbar = () => {
    const { cart} = useContext(CartContext);
    const { wishlist } = useContext(WishlistContext);
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    
  return (
    <>
    {/* Desktop Navigation */}
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img 
            src={logo} 
            alt="McLaren Logo" 
            style={{ height: '50px' }}
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-3">
            <li className="nav-item navver-color">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/"
                end
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/products"
              >
                PRODUCTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/policies"
              >
                POLICIES
              </NavLink>
            </li>
          </ul>

          {/* Cart and Wishlist Icons - Right aligned within container */}
          <ul className="navbar-nav ms-auto navbar-icons-right d-none d-lg-flex">
            <li className='nav-item'>
              <NavLink className="nav-link navbar-icon" to="/wishlist" title="Wishlist">
                <i className='fa fa-heart'></i>
                {wishlist.length > 0 && (
                  <span className="badge bg-danger">
                    {wishlist.length}
                  </span>
                )}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link navbar-icon" to="/cart">
                <i className='fa fa-shopping-cart'></i>
                <span className="badge bg-danger">
                  {totalQty}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Mobile Bottom Navigation */}
    <nav className="navbar-fixed-bottom d-lg-none border-top bg-white shadow-sm">
      <div className="container-fluid d-flex justify-content-around text-center">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link text-orange" : "nav-link text-dark"}>
          <div>
            <i className="fa fa-home fs-5"></i>
            <div style={{ fontSize: '12px' }}>Home</div>
          </div>
        </NavLink>

        <NavLink to="/products" className={({ isActive }) => isActive ? "nav-link text-orange" : "nav-link text-dark"}>
          <div>
            <i className="fa fa-th fs-5"></i>
            <div style={{ fontSize: '12px' }}>Products</div>
          </div>
        </NavLink>

        <NavLink to="/wishlist" className={({ isActive }) => isActive ? "nav-link text-orange position-relative" : "nav-link text-dark position-relative"}>
          <div>
            <i className="fa fa-heart fs-5"></i>
            {wishlist.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {wishlist.length}
              </span>
            )}
            <div style={{ fontSize: '12px' }}>Wishlist</div>
          </div>
        </NavLink>

        <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-link text-orange position-relative" : "nav-link text-dark position-relative"}>
          <div>
            <i className="fa fa-shopping-cart fs-5"></i>
            {totalQty > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalQty}
              </span>
            )}
            <div style={{ fontSize: '12px' }}>Cart</div>
          </div>
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link text-orange" : "nav-link text-dark"}>
          <div>
            <i className="fa fa-info-circle fs-5"></i>
            <div style={{ fontSize: '12px' }}>About</div>
          </div>
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link text-orange" : "nav-link text-dark"}>
          <div>
            <i className="fa fa-phone fs-5"></i>
            <div style={{ fontSize: '12px' }}>Contact</div>
          </div>
        </NavLink>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
