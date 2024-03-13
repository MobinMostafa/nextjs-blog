'use client'
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Header = () => {
    const navLinks = [
        {
            id: 1,
            name: 'Home',
            href: '/'
        },
        {
            id: 2,
            name: 'About',
            href: '/about',
        },
        {
            id:3,
            name: 'Service',
            href: '/service',
        },
        {
          id:4,
          name: 'Blog',
          href: '/blog',
      },
      {
        id:5,
        name: 'All Products',
        href: '/products'
      }
    ]
  return (
    <Navbar expand="lg" className="navColor" >
      <Container>
            <Link href="/" className="navbar-brand nav-brand" > Blog</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
             {navLinks.map((navLink) => (
                <Link href={navLink.href} key={navLink.id} className="nav-link navLinkColor"> 
                   {navLink.name}
               </Link>
             ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
