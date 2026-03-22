import Banner from '../assets/images/Banner.jpg';

const About = () => {
  return (
    <div className="container">
      <div className="row align-items-center about-section">
        {}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <h2 className="featured-title mb-3">About McLaren F1</h2>
          <h5 className="text-muted mb-4">McLAREN RACING</h5>
          
          <p className="about-text">
            McLaren's history books are full of fightbacks and recoveries, but few could claim to be as impressive or exhilarating as the team's most recent.
          </p>
          
          <p className="about-text">
            A historic 10th Constructors' World Championship was sealed under the lights in Singapore, less than three years after the 2023 season at the back of the field at their second home race Bahrain.
          </p>

          <p className="about-text">
            Bruh why do Mclaren's media team have such amazing components for website or multimedia creation.
          </p>

          <button className="btn btn-primary mt-3">
            DISCOVER MORE
          </button>
        </div>

        {/* Right */}
        <div className="col-lg-6 col-md-12">
          <img 
            src={Banner} 
            alt="McLaren Team" 
            className="img-fluid about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
