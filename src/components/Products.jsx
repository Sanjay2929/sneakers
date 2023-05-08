import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import redshoes1 from "../assets/img/png/redShoesProduct.png";
import grayshoes1 from "../assets/img/png/gray_product_shoes.png";
import { FaAngleDoubleRight } from "react-icons/fa";

const Products = () => {
  return (
    <div>
      <section className="pb-5">
        <Container className="pt-2 pb-5">
          <h3 className="fw_600 fs_30 ff_poppins clr_black py-4 mt-1">
            RELATED PRODUCT
          </h3>
          <Row className="pb-5">
            <Col xl={3} lg={4} sm={6} xs={12} className="py_20" data-aos="flip-left"  data-aos-delay="200">
              <SingleProduct redShoes={redshoes1} />
            </Col>
            <Col xl={3} lg={4} sm={6} xs={12} className="py_20" data-aos="flip-right"  data-aos-delay="400">
              <SingleProduct redShoes={grayshoes1} />
            </Col>
            <Col xl={3} lg={4} sm={6} xs={12} className="py_20" data-aos="flip-left"  data-aos-delay="600">
              <SingleProduct redShoes={redshoes1} />
            </Col>
            <Col xl={3} lg={4} sm={6} xs={12} className="py_20" data-aos="flip-right"  data-aos-delay="800">
              <SingleProduct redShoes={grayshoes1} />
            </Col>
            <Col xl={3} lg={4} sm={6} xs={12} className="py_20" data-aos="flip-left"  data-aos-delay="1000">
              <SingleProduct redShoes={redshoes1} />
            </Col>
            <Col xl={3} lg={4} sm={6} xs={12} className="py_20" data-aos="flip-right"  data-aos-delay="1200">
              <SingleProduct redShoes={grayshoes1} />
            </Col>
            <Col xl={3} lg={4} sm={6} xs={12} className="py_20" data-aos="flip-left"  data-aos-delay="1400">
              <SingleProduct redShoes={redshoes1} />
            </Col>
            <Col xl={3} lg={4} sm={6} xs={12} className="py_20" data-aos="flip-right"  data-aos-delay="1600">
              <SingleProduct redShoes={grayshoes1} />
            </Col>
          </Row>
          <div className="d-flex justify-content-end gap-2 pt-3">
            <p className="pageNumber mb-0 clr_white fw_600 fs_24 ff_poppins d-flex justify-content-center align-items-center bg_orange ">
              1
            </p>
            <p className="pageNumber mb-0 clr_black fw_600 fs_24 ff_poppins d-flex justify-content-center align-items-center ">
              2
            </p>
            <p className="pageNumber mb-0 clr_black fw_600 fs_24 ff_poppins d-flex justify-content-center align-items-center ">
              3
            </p>
            <button className="fw_400 fs_16 ff_poppins clr_darkgray pad_11_18 nextButton ms-2">
              Next{" "}
              <span>
                <FaAngleDoubleRight />
              </span>
            </button>
          </div>{" "}
        </Container>
      </section>
    </div>
  );
};

export default Products;
