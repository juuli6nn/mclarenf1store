import Banner4 from '../assets/images/Banner4.jpg';
import Banner1 from '../assets/images/Banner1.jpg';
import Banner2 from '../assets/images/Banner2.jpg';
import Banner3 from '../assets/images/Banner3.jpg';

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Banner1} className="d-block w-100" alt="Banner 1" style={{ height: '700px', objectFit: 'cover', objectPosition: 'center 30%' }} />
        </div>
        <div className="carousel-item">
          <img src={Banner2} className="d-block w-100" alt="Banner 2" style={{ height: '700px', objectFit: 'cover', objectPosition: 'center 20%' }} />
        </div>
        <div className="carousel-item">
          <img src={Banner3} className="d-block w-100" alt="Banner 3" style={{ height: '700px', objectFit: 'cover', objectPosition: 'center center' }} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
