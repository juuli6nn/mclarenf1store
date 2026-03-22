import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { WishlistContext } from '../content/WishlistContext';

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="container my-5">
      <h2 className="mb-4">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="alert alert-orange">
          <p className="mb-0">Your wishlist is empty.</p>
          <Link to="/products" className="btn btn-primary mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <p className="text-muted mb-4">You have {wishlist.length} item(s) in your wishlist</p>
          
          <div className="row">
            {wishlist.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
