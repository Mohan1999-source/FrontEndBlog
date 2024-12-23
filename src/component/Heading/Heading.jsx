import React, { useContext, useState, useEffect } from 'react';
import { BlogContext } from '../../context/Context';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Heading.css'

const Heading = () => {
  const { changeCategory } = useContext(BlogContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= 768) { 
        setOpen(true); 
        setTimeout(() => {
          setOpen(false); 
        }, 2000); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  return (
    <Navbar expand="lg" bg="light" variant="light" className='m-2'>
      <Container className='' >
        <Navbar.Brand href="#" className='menu-align d-lg-none'>MENU</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setOpen(!open)}  
        />
        <Navbar.Collapse id="basic-navbar-nav" in={open}>
          <Nav className="me-auto Button-align">
            <Nav.Link as="button" className='btn-align' onClick={() => changeCategory('Trending')}>Trending</Nav.Link>
            <Nav.Link as="button" className='btn-align' onClick={() => changeCategory('All')}>All</Nav.Link>
            <Nav.Link as="button" className='btn-align' onClick={() => changeCategory('Kollywood')}>Kollywood</Nav.Link>
            <Nav.Link as="button" className='btn-align' onClick={() => changeCategory('Bollywood')}>Bollywood</Nav.Link>
            <Nav.Link as="button" className='btn-align' onClick={() => changeCategory('Tollywood')}>Tollywood</Nav.Link>
            <Nav.Link as="button" className='btn-align' onClick={() => changeCategory('Hollywood')}>Hollywood</Nav.Link>
            <Nav.Link as="button" className='btn-align' onClick={() => changeCategory('tamilDub')}>Tamil dubbed</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Heading;
