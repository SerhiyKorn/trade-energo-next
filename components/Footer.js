import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import MapContainer from "./MapContainer"
import 'mdbreact/dist/css/mdb.css'
import 'font-awesome/css/font-awesome.min.css';
const Footer = () => {
  return (
    <MDBFooter
      color="unique-color"
      className="page-footer font-small pt-1 "
    >
      <MDBContainer className="mt-2 text-center text-md-left">
        <MDBRow className="mt-3 d-flex justify-content-around">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Трейденергоресурс</strong>
            </h6>
            <hr
              className="blue-grey darken-4 accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
            Постачальник електричної енергії для непобутових споживачів по всій Україні.
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="5" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Контакти</strong>
            </h6>
            <hr
              className="blue-grey darken-4 accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
            <i className="fa fa-home mr-3" /> 02094,м.Київ, Дніпровський р-н, вулиця Івана Сергієнка, будинок 18, офіс 14/1
            </p>
            <p>
            <i className="fa fa-envelope mr-3" /> office.tradeenergo@gmail.com
            </p>
            <p>
            <i className="fa fa-phone mr-3" /> +38(050)0208503
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright{" by "}
          <a href=""> Tradeenergoresource </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
