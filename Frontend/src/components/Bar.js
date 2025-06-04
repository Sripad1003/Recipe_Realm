import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Bar.css'

function handleclick() {
  setTimeout(() => {
    window.scrollBy({
      top: 200,
      left: 0,
      behavior: 'smooth'
    });
  }, 500);
}

function Bar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={handleclick}>Home</Nav.Link>
            <Nav.Link href="/search-recipe" onClick={handleclick}>Search Recipe</Nav.Link>
            <Nav.Link href="/generate-recipe" onClick={handleclick}>Generate Recipe</Nav.Link>
            <Nav.Link href="about-us" onClick={handleclick}>About Us</Nav.Link>
            {/* <Nav.Link href="#pricing" onClick={handleclick}>Favourites</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Bar;
