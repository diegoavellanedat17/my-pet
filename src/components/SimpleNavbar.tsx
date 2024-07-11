import styled from 'styled-components';

import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';

const StyledNavbar = styled(Navbar)`
  background-color: #718c88;
`;

const SimpleNavbar = () => {
  return (
    <StyledNavbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/" className="text-white">
          MyPet
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-white"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} href="/login" className="text-white">
              Login
            </Nav.Link>
            <Nav.Link as={Link} href="/register" className="text-white">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default SimpleNavbar;
