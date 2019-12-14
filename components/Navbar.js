import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { useRouter } from "next/router";
import Link from "next/link";
import '../stylesheets/navStyles.css'
const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MDBNavbar light color="white" expand="lg" className="p-4">
        <MDBNavbarBrand>
          <h2 className="font-weight-bold h2-responsive">
            Трейд Енерго Ресурс
          </h2>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav>
            <MDBNavItem>
              <Link href="/">
                <h4 className="nav-link h4-responsive mt-1">Головна</h4>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/normbase">
                <h4 className="nav-link h4-responsive mt-1">Нормативна База</h4>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/">
                <h4 className="nav-link h4-responsive mt-1">Споживачам</h4>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/contacts">
                <h4 className="nav-link h4-responsive mt-1">Контакти</h4>
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
