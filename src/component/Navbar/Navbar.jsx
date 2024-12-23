import Navbar from "react-bootstrap/Navbar";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import logo from "../../assets/logo6.png";
import { BlogContext } from "../../context/Context";
import { BsSearch } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

function NavBar() {
  const { searchQuery, setSearchQuery } = useContext(BlogContext);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Navbar className="Nav-container">
      <Container fluid className="mx-1 mx-md-5">
        <div className="nav-links">
          <Navbar.Brand href="/" className="logo-container">
            <img className="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Nav className="home-container">
            <Link to="/">Home</Link>
          </Nav>
        </div>
        <Nav className="ml-auto">
          <Form className="d-flex align-items-center position-relative justify-content-end">
            <input
              type="text"
              placeholder="Find movies, web series, and more..."
              onChange={handleSearchChange}
              value={searchQuery}
              className="Search-container"
              aria-label="Search"
            />
            <BsSearch className="search-icon" />
          </Form>
        </Nav>
        <div className="align-email-icon">
          <a href="mailto:criticsmohan@gmail.com">
            <FaEnvelope color="black" className="email-align" />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
