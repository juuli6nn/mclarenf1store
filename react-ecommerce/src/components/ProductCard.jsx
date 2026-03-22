import { useContext } from "react";
import { CartContext } from "../content/CartContent";
import { WishlistContext } from "../content/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);
  
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="card h-100 position-relative">
      {/* Wishlist Button */}
      <button
        onClick={handleWishlistToggle}
        className={`btn-wishlist ${inWishlist ? 'active' : ''}`}
        title={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <i className={`fa fa-heart ${inWishlist ? 'fas' : 'far'}`}></i>
      </button>

      {/* Image wrapper for zoom and badge */}
      <div className="product-img-wrapper">
        {/* Sale badge */}
        {product.discount && (
          <div className="sale-badge">{product.discount}%</div>
        )}

        <img
          src={product.image}
          className="card-img-top product-img"
          alt={product.name}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.name}</h6>

        {/* Star rating */}
        <div className="mb-2 text-warning">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={index < product.rating ? 'fas fa-star' : 'far fa-star'}
            ></i>
          ))}
        </div>

        {/* Price section */}
        <div className="mb-2">
          <span className="text-muted text-decoration-line-through me-2">
            ₱{product.oldPrice}
          </span>
          <span className="fw-bold text-danger">
            ₱{product.price}
          </span>
        </div>

        {/* When clicked, send this product to App.jsx */}
        <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
          <i className="fas fa-shopping-cart me-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
