import { Nav, Navbar, Container, NavItem, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          How to use Transaction Managment App
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>
            ✨ Click'Add New Transaction'
          </li>
          <li>
            ✨ Fill out the form
          </li>
          <li>
            ✨ Click Add Transaction
          </li>
          <li>
            ✨ The new transaction will be in the main page
          </li>
          <li>
            ✨ In this page you can See More, Edit or Archive the client
          </li>
          <li>
            ✨ You can view each transaction by clicking 'See More'
          </li>
          <li>
            ✨ If you have any question <a href="mailto:me@jonathanaldas.com">Email Me!</a>
          </li>

        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function NavBarComponent() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Navbar bg="light" expand="lg" sticky='top'>
        <Container>
          <Navbar.Brand>
            <Link className="nav-link text-secondary" to="/">Transaction Managment</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavItem>
                <Link className="nav-link" to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/transactions/archived">Archvies</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          <Button variant="outline-secondary" onClick={() => setModalShow(true)} className='mx-2'>
            How to use?
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

          <a  target='_blank' className='my-3 mr-2' href="https://www.youtube.com/watch?v=SkS4hNU2koo">Video Explanation</a>
          <a target='_blank' className='my-3 mr-2' href="https://github.com/jonaaldas/transactionsV2">Github</a>
        </Container>
      </Navbar>
      <div className="w-full flex items-center justify-center py-4 ">
        <Link to={`/transactions/add`}>
          <Button className='add-transaction-btn center' variant='secondary'>Add New Transaction</Button>
        </Link>
      </div>
    </>
  );
}

export default NavBarComponent;