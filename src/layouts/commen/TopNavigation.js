
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SingaleNavigationItem from '../../components/navigationbar/SingaleNavigationItem';
import BrandTypography from '../../components/commen/BrandTypography';
import { IconButton, styled } from '@mui/material';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { linkPath } from '../../util/MetaData';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -1px;
    background-color: rgb(255,125,29);
    color: white;
  }
`;

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
export default function TopNavigation({ItemCount}) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={linkPath.homePage} style={{ textDecoration: 'none', color: 'inherit' ,marginRight:'10px'}}>
          <BrandTypography/>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"  style={{gap:'30px'}}>
            {navLinks.map((val,key)=>{
                return (             
                    <SingaleNavigationItem key={key} title={val.title} path={val.path}/> 
                );
            })}
          
          </Nav>
          <Nav >
          <Link to={linkPath.cart} style={{ textDecoration: 'none', color: 'inherit' }}>
              <IconButton color="inherit">
                <ShoppingCartIcon size="large" />
                <CartBadge badgeContent={ItemCount}  overlap="circular" />
              </IconButton>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

