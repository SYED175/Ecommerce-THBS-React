import bgImage from "../../assets/logoBackground.png";
import waveImg from "../../assets/wave1.png";
const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="promo-title">Ecommerce Store</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              quidem quae nemo assumenda modi debitis doloribus voluptas
              obcaecati
            </p>
            <button className="btn btn-custom">Vist Blog</button>
          </div>
          <div className="col-md-6">
            <img src={bgImage} className="img-fluid" />
          </div>
        </div>
      </div>
      <img src={waveImg} className="bottom-wave" />
    </section>
  );
};

export default Banner;
