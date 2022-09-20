import Image from "next/image";
import mypic1 from "../../asset/casestudy2.png";
import mypic2 from "../../asset/casestudy3.png";
import mypic3 from '../../asset/adidas.png';
import classes from "./CaseStudy.module.css";

const CaseStudy = () => {
  return (
    <div className={classes.casestudy}>
      <div className="container p-5">
        <div className={classes.carasoulWrapper}>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className={`carousel-item active ${classes.imageWrapper}`}>
              <Image
                src={mypic1}
                className={`d-block w-100 ${classes.imageStyle} img-fluid`}
                alt=""
              />
            </div>
            <div className={`carousel-item  ${classes.imageWrapper} `}>
              <Image
                src={mypic2}
                className={`d-block w-100 ${classes.imageStyle} img-fluid`}
                alt=""
              />
            </div>
            <div className={`carousel-item  ${classes.imageWrapper}`}>
              <Image
                src={mypic3}
                className={`d-block w-100 ${classes.imageStyle} img-fluid`}
                alt=""
              />
            </div>
          </div>
          <button
            className={`carousel-control-prev ${classes.buttonStyle}`}
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className={`carousel-control-next ${classes.buttonStyle}`}
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CaseStudy;
