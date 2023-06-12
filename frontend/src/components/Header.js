import '../index.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'

// Navigation section
const Header = () => {

  return (
    <header>
        <Navbar
        bg='light'
        variant='light'
        expand='md'
        collapseOnSelect
        >
            {/* Bootstrap navigation components */}
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>
                        <img className='logo' src='/images/car.svg' alt='We Store Cars'/>
                        <span className='px-3'>We Store Cars</span>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <LinkContainer to="/add"><Nav.Link><img className='plus' src="/images/plus.png" alt="Add Folder"/>ADD NEW CAR</Nav.Link></LinkContainer>
                        <Nav.Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header