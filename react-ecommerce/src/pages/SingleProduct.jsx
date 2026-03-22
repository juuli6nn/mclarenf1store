const SingleProduct = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img 
            src="/src/assets/images/Product1.jpg" 
            className="img-fluid" 
            alt="Product" 
          />
        </div>
        <div className="col-md-6">
          <h2>Product Name</h2>
          <p className="text-muted">Product description goes here...</p>
          <h4 className="text-danger">₱1,499</h4>
          <button className="btn btn-primary">
            <i className="fas fa-shopping-cart me-2"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;