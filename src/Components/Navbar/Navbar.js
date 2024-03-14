import React from "react";
import style from "../Navbar/Navbar.module.scss";
import "../Navbar/Navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../Assets/Logo/blexpanse_logo.png";

import { useTranslation } from "react-i18next";

const NavbarIc = () => {
  const [t, i18n] = useTranslation("global");

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <React.Fragment>
      <Navbar>
        <Container className={`${style.navContainer} ${style.navBarIc}`}>
          <Navbar.Brand
            href="#home"
            className={`${style.navLink} ${style.navBarIc} text-large wheight300`}
          >
            <img className={style.logo} src={Logo} alt="comany logo" />
            {/* Language area */}
            <span className={style.languageBtn}>
              <label className="languageLabel">
                <input
                  type="radio"
                  name="language"
                  value="ro"
                  onChange={() => handleLanguageChange("ro")}
                />{" "}
                <label className="languageLabel">ro</label>
              </label>{" "}
              <span style={{ color: "#fff" }}> / </span>
              <label className="languageLabel">
                <input
                  type="radio"
                  name="language"
                  value="en"
                  defaultChecked
                  onChange={() => handleLanguageChange("en")}
                />{" "}
                <label className="languageLabel">en</label>
              </label>
              {/* Add more language options as needed */}
            </span>
          </Navbar.Brand>
          <Nav>
            {/* <Nav.Link href="#home" className={`${style.navLink} ${style.navBarIc}`}>Home</Nav.Link> */}
            <Nav.Link
              href="#aboutUs"
              className={`${style.navLink} ${style.navBarIc} text-large wheight300`}
            >
              {t("NavBar.Text01")}
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`${style.navLink} ${style.navBarIc} text-large wheight300`}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarIc;
