import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footlocker from "../assets/img/png/footlocker.png";
import Slider from "react-slick";
import sideStep from "../assets/img/png/sidestep.png";

const BuyingSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section>
        <Container>
          <h2 className="fw_500 fs_25 ff_poppins clr_black">
            You can buy the Nike Air Max 97 Men's Shoe - White here:
          </h2>
          <Slider {...settings} className="py-4">
            <div className="slider_shadoww mb-3" data-aos="flip-left"  data-aos-delay="300">
              <div className=" pad_27_44 footlocker mb-2">
                <img className="w-100" src={footlocker} alt="img" />
              </div>
              <div className="px_19_16 pt-4 pb-3 ">
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="d-flex align-items-center gap-3">
                    <h4 className="fw_400 fs_16 ff_poppins clr_black">
                      Price:
                    </h4>
                    <h4 className="fw_600 fs_20 ff_poppins clr_black">
                      &#8364;179,99
                    </h4>
                  </div>
                  <h4 className="fs_10 clr_white ff_poppins fw_400 bestPrice">
                    Best Price
                  </h4>
                </div>
                <h4 className="fw_400 fs_16 ff_poppins clr_black pb-2 mb-1">
                  Size:
                </h4>
                <div className="d-flex w-100 gap_12 pb-2">
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                </div>
                <div className="d-flex w-100 gap_12 pt-1 pb-3">
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                </div>
                <h3 className=" fw_400 fs_16 ff_poppins clr_darkgreen pt-1 pb-2">
                  View this product as:
                </h3>
                <h3 className="fw_600 fs_16 ff_poppins clr_blue">
                  Foot Locker NL
                </h3>
              </div>
            </div>
            <div className="slider_shadoww mb-3" data-aos="flip-left"  data-aos-delay="600">
              <div className=" pad_27_44 footlocker mb-2">
                <img className="w-100" src={sideStep} alt="img" />
              </div>
              <div className="px_19_16 pt-4 pb-3 ">
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="d-flex align-items-center gap-3">
                    <h4 className="fw_400 fs_16 ff_poppins clr_black">
                      Price:
                    </h4>
                    <h4 className="fw_600 fs_20 ff_poppins clr_black">
                      &#8364;179,99
                    </h4>
                  </div>
                  <h4 className="fs_10 clr_white ff_poppins fw_400 bestPrice">
                    Best Price
                  </h4>
                </div>
                <h4 className="fw_400 fs_16 ff_poppins clr_black pb-2 mb-1">
                  Size:
                </h4>
                <div className="d-flex w-100 gap_12 pb-2">
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                </div>
                <div className="d-flex w-100 gap_12 pt-1 pb-3">
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                </div>
                <h3 className=" fw_400 fs_16 ff_poppins clr_darkgreen pt-1 pb-2">
                  View this product as:
                </h3>
                <h3 className="fw_600 fs_16 ff_poppins clr_blue">
                  Foot Locker NL
                </h3>
              </div>
            </div>
            <div className="slider_shadoww mb-3" data-aos="flip-left"  data-aos-delay="900">
              <div className=" pad_27_44 footlocker mb-2">
                <img className="w-100" src={footlocker} alt="img" />
              </div>
              <div className="px_19_16 pt-4 pb-3 ">
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="d-flex align-items-center gap-3">
                    <h4 className="fw_400 fs_16 ff_poppins clr_black">
                      Price:
                    </h4>
                    <h4 className="fw_600 fs_20 ff_poppins clr_black">
                      &#8364;179,99
                    </h4>
                  </div>
                  <h4 className="fs_10 clr_white ff_poppins fw_400 bestPrice">
                    Best Price
                  </h4>
                </div>
                <h4 className="fw_400 fs_16 ff_poppins clr_black pb-2 mb-1">
                  Size:
                </h4>
                <div className="d-flex w-100 gap_12 pb-2">
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                </div>
                <div className="d-flex w-100 gap_12 pt-1 pb-3">
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                </div>
                <h3 className=" fw_400 fs_16 ff_poppins clr_darkgreen pt-1 pb-2">
                  View this product as:
                </h3>
                <h3 className="fw_600 fs_16 ff_poppins clr_blue">
                  Foot Locker NL
                </h3>
              </div>
            </div>
            <div className="slider_shadoww mb-3" data-aos="flip-left"  data-aos-delay="1200">
              <div className=" pad_27_44 footlocker mb-2">
                <img className="w-100" src={sideStep} alt="img" />
              </div>
              <div className="px_19_16 pt-4 pb-3 ">
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="d-flex align-items-center gap-3">
                    <h4 className="fw_400 fs_16 ff_poppins clr_black">
                      Price:
                    </h4>
                    <h4 className="fw_600 fs_20 ff_poppins clr_black">
                      &#8364;179,99
                    </h4>
                  </div>
                  <h4 className="fs_10 clr_white ff_poppins fw_400 bestPrice">
                    Best Price
                  </h4>
                </div>
                <h4 className="fw_400 fs_16 ff_poppins clr_black pb-2 mb-1">
                  Size:
                </h4>
                <div className="d-flex w-100 gap_12 pb-2">
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                </div>
                <div className="d-flex w-100 gap_12 pt-1 pb-3">
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center size_number w-100">
                    <h5 className="ff-poppins fw_500 fs_16 clr_black18">41</h5>
                  </div>
                </div>
                <h3 className=" fw_400 fs_16 ff_poppins clr_darkgreen pt-1 pb-2">
                  View this product as:
                </h3>
                <h3 className="fw_600 fs_16 ff_poppins clr_blue">
                  Foot Locker NL
                </h3>
              </div>
            </div>
          </Slider>
        </Container>
      </section>
    </div>
  );
};

export default BuyingSection;

