import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Main from './Main'
import Jumbo from '../components/Jumbo';
import Footer from '../components/Footer'

const Home = () => (
  <div>
    <Head>
      <title>Головна</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
    </Head>
    <Navbar></Navbar>
    <Jumbo></Jumbo>
    <Main></Main>
    <Footer></Footer>
  </div>
)

export default Home
