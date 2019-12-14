import React, { useState } from "react";
import { services } from "../libs/services";
import {
  MDBContainer,
  MDBCollapse,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader
} from "mdbreact";
import Head from 'next/head'
import Navbar from '../components/Navbar'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Jumbo from '../components/Jumbo';
import Footer from '../components/Footer'
const NormBase = () => {
  const [collapseID, setCollapseID] = useState("collapse1");

  const toggleCollapse = newCollapseID => () =>
    setCollapseID(collapseID !== newCollapseID ? newCollapseID : "");

  return (
    <div>
      <Head>
        <title>Нормативна База</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        />
      </Head>
      <Navbar></Navbar>
      <Jumbo></Jumbo>
      <div className="p-5">
        {services.map((elem, i) => (
          <MDBContainer key={i} className="accordion md-accordion accordion-1">
            <MDBCardHeader
              onClick={toggleCollapse(`collapse${i + 1}`)}
              tag="h4"
              className="d-flex justify-content-between align-items-center"
            >
              {elem.name}
              <MDBIcon
                icon={
                  collapseID === `collapse${i + 1}` ? "angle-up" : "angle-down"
                }
                className="grey-text pl-2"
                size="2x"
              />
            </MDBCardHeader>
            <MDBCollapse id={`collapse${i + 1}`} isOpen={collapseID}>
              <MDBCardBody className="pt-3">
                <ul>
                  {elem.list.map((service, i) => (
                    <li key={i}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={service.link}
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </MDBCardBody>
            </MDBCollapse>
          </MDBContainer>
        ))}

      </div>
      <Footer></Footer>
    </div>
  );
};
export default NormBase;
