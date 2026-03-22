import Banner5 from '../assets/images/Banner5.jpg';

const Policies = () => {
  return (
    <div className="container">
      <div className="row align-items-center about-section mb-5">
        {/* Left side */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <img 
            src={Banner5} 
            alt="McLaren Policies" 
            className="img-fluid about-image"
          />
        </div>

        {/* Right side*/}
        <div className="col-lg-6 col-md-12">
          <h2 className="featured-title mb-3">Our Policies</h2>
          <p className="about-text">
            We are committed to providing you with the best shopping experience. Our policies are designed to protect both our customers and our business while ensuring transparency and fairness.
          </p>
          <p className="about-text">
            Please take time to review our comprehensive policies below. If you have any questions or concerns, please don't hesitate to contact our customer service team.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          {}
          <div className="policy-section mb-5">
            <h4 className="policy-title">Privacy Policy</h4>
            <p>
              We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p>
              We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include your name, email address, postal address, phone number, and payment information.
            </p>
            <p>
              We use this information to process your orders, send you promotional communications, and improve our services. We do not sell your personal information to third parties.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Policies;