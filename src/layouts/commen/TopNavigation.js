
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SingaleNavigationItem from '../../components/navigationbar/SingaleNavigationItem';
import BrandTypography from '../../components/commen/BrandTypography';

const navLinks = [
  { title: 'All Items'},
  { title: 'Dress'},
  { title: 'Seasonal'},
  { title: 'Denims'},
  { title: 'T-Shirts'},
  { title: 'Tops'},
];
export default function TopNavigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home"><BrandTypography/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            {navLinks.map((val,key)=>{
                return (
                   <SingaleNavigationItem val={val} key={key} />
                );
            })}
          
          </Nav>
          <Nav>
            <SingaleNavigationItem val={{title:'Cart'}} key={'0'}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

