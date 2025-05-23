import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import './Bar.css';

function Bar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }, 1000); // 1000 milliseconds = 1 second
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => handleNavigation('/')}
              className={path === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation('/search-recipe')}
              className={path === '/search-recipe' ? 'active' : ''}
            >
              Search Recipe
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation('/generate-recipe')}
              className={path === '/generate-recipe' ? 'active' : ''}
            >
              Generate Recipe
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation('/about-us')}
              className={path === '/about-us' ? 'active' : ''}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation('/favs')}
               className={path === '/favs' ? 'active' : ''}
            >
              Favourites
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Bar;