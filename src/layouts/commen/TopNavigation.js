
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SingaleNavigationItem from '../../components/navigationbar/SingaleNavigationItem';
import BrandTypography from '../../components/commen/BrandTypography';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { linkPath } from '../../util/MetaData';

const navLinks = [
  { title: 'All Items',
    path:linkPath.allItems,
  }, 
  { title: 'Dress',
    path:linkPath.dress,
  },
  { title: 'Seasonal',
    path:linkPath.seasonal,
  },
  { title: 'Denims',
    path:linkPath.denims,
  },
  { title: 'T-Shirts',
    path:linkPath.tshirts,
  },
  { title: 'Tops',
    path:linkPath.tops,
  },
];
export default function TopNavigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href={linkPath.homePage}><BrandTypography/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"  style={{gap:'30px'}}>
            {navLinks.map((val,key)=>{
                return (             
                    <SingaleNavigationItem key={key} title={val.title} path={val.path}/> 
                );
            })}
          
          </Nav>
          <Nav>
          <Link to={linkPath.cart} style={{ textDecoration: 'none', color: 'inherit' }}>
              <IconButton color="inherit">
                <ShoppingCartIcon size="large" />
              </IconButton>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

