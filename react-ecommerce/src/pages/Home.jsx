import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
    .then((res) => res.json())
    .then((data) => {
        setProducts(data.slice(0, 8));
        setLoading(false);
    });
  }, []);

  if (loading) {
    return <h3 className="text-center my-5">Loading products...</h3>;
  }
  return (
    <>
      {/* Full-width Carousel Banner */}
      <Carousel />

      {/* Products Section */}
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>FEATURED PRODUCTS</h2>

          {/* Link to full ProductList page */}
          <Link to="/products" className="btn btn-outline-orange">
            VIEW MORE PRODUCTS
          </Link>
        </div>

        <div className="row">
          {products.map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
