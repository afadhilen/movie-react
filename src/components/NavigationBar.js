import {Navbar, Container, Nav} from "react-bootstrap"

function NavigationBar() {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">Memoaraku</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">Movies</Nav.Link>
            <Nav.Link href="#potrait">TV Series</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar

// const Navbar = () => {
//   return (
//     <div>
//       <h1>Test Navbar</h1>
//     </div>
//   );
// };

// export default Navbar;
