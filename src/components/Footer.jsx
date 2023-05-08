import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/png/footerLogo.png";
const Footer = () => {
  return (
    <>
      <section className="footer_bg pt-1">
        <Container className="py-sm-4 ">
          <div className="max_w_90 logoposition position-relative">
            <img className="w-100" src={logo} alt="logo" />
          </div>
          <Row className="pb-4 mb-sm-3">
            <Col xl={5} md={8} xs={12}>
              <div className="pe-xxl-5 me-sm-2 ">
                <p
                  className="fw_400 fs_16 ff_poppins clr_white opacity_60 me-sm-4 lh_30 pb-xl-4 pb-3 mb-3"
                  data-aos="fade-right"  data-aos-delay="300"
                >
                  Sed nec ultricies felis, vitae facilisis ipsum. Morbi id
                  turpis euismod, rhoncus tortor quis, lobortis sapien. Sed
                  imperdiet nulla in leo ullamcorper, in finibus elit porta.{" "}
                </p>
                <div className="d-flex gap-xl-4 pt-0">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.897461 15.4679C0.897461 22.6714 6.12925 28.6614 12.9717 29.8761V19.4113H9.34946V15.387H12.9717V12.1668C12.9717 8.54447 15.3057 6.53289 18.6068 6.53289C19.6524 6.53289 20.7802 6.69348 21.8258 6.85407V10.5573H19.9748C18.2035 10.5573 17.8015 11.4423 17.8015 12.57V15.387H21.6652L21.0217 19.4113H17.8015V29.8761C24.6439 28.6614 29.8757 22.6726 29.8757 15.4679C29.8757 7.45416 23.3556 0.897827 15.3866 0.897827C7.41757 0.897827 0.897461 7.45416 0.897461 15.4679Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1609 0.17334C7.75942 0.17334 0.947266 6.9855 0.947266 15.3869C0.947266 23.7884 7.75942 30.6005 16.1609 30.6005C24.5623 30.6005 31.3745 23.7884 31.3745 15.3869C31.3745 6.9855 24.5623 0.17334 16.1609 0.17334ZM23.4722 11.6413C23.4824 11.8009 23.4824 11.9673 23.4824 12.1303C23.4824 17.1154 19.6858 22.8579 12.748 22.8579C10.6086 22.8579 8.62538 22.2364 6.9546 21.1667C7.26023 21.2007 7.55227 21.2143 7.8647 21.2143C9.63056 21.2143 11.2538 20.6166 12.5476 19.6046C10.8904 19.5707 9.49812 18.484 9.02269 16.9898C9.60339 17.0747 10.1264 17.0747 10.724 16.9219C9.87074 16.7485 9.10377 16.2851 8.55344 15.6103C8.0031 14.9356 7.70335 14.0911 7.70509 13.2204V13.1728C8.20429 13.4547 8.79177 13.6279 9.40643 13.6516C8.88972 13.3073 8.46597 12.8407 8.17274 12.2934C7.87952 11.746 7.72588 11.1348 7.72546 10.5138C7.72546 9.81088 7.90884 9.16906 8.23824 8.61213C9.18537 9.77806 10.3672 10.7316 11.707 11.4109C13.0468 12.0902 14.5146 12.4799 16.0148 12.5548C15.4817 9.99086 17.397 7.91597 19.6994 7.91597C20.7861 7.91597 21.7641 8.37102 22.4534 9.10453C23.3058 8.94493 24.1208 8.62571 24.8475 8.19783C24.5657 9.07057 23.9748 9.80748 23.1904 10.2727C23.951 10.1912 24.6845 9.98067 25.3637 9.68523C24.8509 10.4391 24.2091 11.1081 23.4722 11.6413Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9353 0.17334C7.53384 0.17334 0.72168 6.9855 0.72168 15.3869C0.72168 23.7884 7.53384 30.6005 15.9353 30.6005C24.3367 30.6005 31.1489 23.7884 31.1489 15.3869C31.1489 6.9855 24.3367 0.17334 15.9353 0.17334ZM17.1748 19.1496C15.684 21.2482 12.6888 21.8595 10.3524 20.9596C8.00926 20.0665 6.34528 17.5909 6.54563 15.0677C6.59657 11.9809 9.43893 9.27433 12.5258 9.3796C14.0064 9.31168 15.3987 9.95351 16.5329 10.8602C16.0473 11.4103 15.5481 11.9401 15.0116 12.4325C13.6498 11.4918 11.7108 11.2236 10.349 12.3103C8.39979 13.6584 8.3115 16.8404 10.186 18.2904C12.0096 19.9442 15.4565 19.1224 15.9624 16.5891C14.8214 16.5721 13.6736 16.5891 12.5326 16.5517C12.5292 15.8691 12.5258 15.19 12.5292 14.5074C14.4377 14.5006 16.3496 14.4972 18.2615 14.5142C18.3735 16.1204 18.1596 17.8252 17.1748 19.1496ZM25.4098 16.2189C24.8393 16.2257 24.2688 16.2291 23.6983 16.2325C23.6915 16.803 23.6881 17.3735 23.6881 17.944H21.98C21.9732 17.3735 21.9732 16.8064 21.9698 16.2359C21.3993 16.2291 20.8288 16.2257 20.2582 16.2189V14.5176C20.8288 14.5108 21.3993 14.5074 21.9698 14.5074C21.9732 13.9369 21.98 13.3664 21.9834 12.7959H23.6881L23.6983 14.5074C24.2688 14.5142 24.8393 14.5142 25.4098 14.5176V16.2189Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </Col>
            <Col xl={7} xs={12}>
              <Row className=" justify-content-end pt-3 pt-xl-0">
                <Col
                  md={3}
                  xs={6}
                  className="pt-xl-0 pt-4"
                  data-aos="fade-right"  data-aos-delay="600"
                >
                  <h3 className="fw_600 fs_18 ff_poppins clr_white mb-4">
                    CUSTOM LINKS
                  </h3>
                  <ul className="ps-0">
                    <li className="mb-3">
                      <a
                        className="fw_400 fs_18 ff_poppins clr_white opacity_70"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        className="fw_400 fs_18 ff_poppins clr_white opacity_70"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col
                  md={3}
                  xs={6}
                  className="pt-xl-0 pt-4"
                  data-aos="fade-right"  data-aos-delay="900"
                >
                  <h3 className="fw_600 fs_18 ff_poppins clr_white mb-4">
                    PRODUCTS
                  </h3>
                  <ul className="ps-0">
                    <li className="mb-3">
                      <a
                        className="fw_400 fs_18 ff_poppins clr_white opacity_70"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        className="fw_400 fs_18 ff_poppins clr_white opacity_70"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        className="fw_400 fs_18 ff_poppins clr_white opacity_70"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col
                  md={3}
                  xs={6}
                  className="pt-xl-0 pt-4"
                  data-aos="fade-right"  data-aos-delay="1200"
                >
                  <h3 className="fw_600 fs_18 ff_poppins clr_white mb-4">
                    OUR COMPANY
                  </h3>
                  <ul className="ps-0">
                    <li className="mb-3">
                      <a
                        className="fw_400 fs_18 ff_poppins clr_white opacity_70"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        className="fw_400 fs_18 ff_poppins clr_white opacity_70"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col
                  md={3}
                  xs={6}
                  className="pt-xl-0 pt-4"
                  data-aos="fade-right"  data-aos-delay="1500"
                >
                  <h3 className="fw_600 fs_18 ff_poppins clr_white mb-4">
                    YOUR&nbsp;ACCOUNT
                  </h3>
                  <ul className="ps-0">
                    <li className="mb-3">
                      <a
                        className="fw_400 fs_18 ff_poppins clr_white opacity_70"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        className="fw_400 fs_18 ff_poppins clr_white opacity_70"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg_gray17 pad_Y_22_23">
        <h3 className="text-center ff_poppins fs_18 fw_400 clr_white opacity_70">
          © Copyright SNKRPLTS 2021.{" "}
        </h3>
      </section>
    </>
  );
};

export default Footer;
