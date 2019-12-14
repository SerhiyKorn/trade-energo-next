import React from "react";
import MapContainer from "../components/MapContainer";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";
import { MDBContainer } from "mdbreact";
const Contacts = () => {
  return (
    <div>
      <Head>
        <title>Контакти</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        />
      </Head>
      <Navbar></Navbar>
      <Jumbo></Jumbo>
      <MDBContainer>
        <div className="p-4">
          <div className="text-center ">
            <h4 className="text-uppercase text-center font-weight-bold">
              <strong>Наші дані</strong>
            </h4>
            <h3>
              <i className="fa fa-home mr-3" /> Київ, Україна
            </h3>
            <h3>
              <i className="fa fa-envelope mr-3" /> office@email.org.ua
            </h3>
            <h3>
              <i className="fa fa-phone mr-3" /> +38 0234 322-222
            </h3>
          </div>
          <hr></hr>
          <div className="text-center">
            <h4 className="text-uppercase text-center font-weight-bold">
              <strong>Робочі години:</strong>
            </h4>
            <h3>ПН-ПТ: 9:00-18:00</h3>
            <h3>СБ-НД: Вихідні</h3>
          </div>
          <hr></hr>
          <h4 className="text-uppercase text-center font-weight-bold">
            <strong>Як нас знайти?</strong>
          </h4>
          <MapContainer isPage />
        </div>
      </MDBContainer>
      <Footer></Footer>
    </div>
  );
};

export default Contacts;
