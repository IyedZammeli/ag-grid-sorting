import React from 'react'
import { Button, Row , Container, Navbar, Alert, Col, Badge, Nav, Pagination, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import App from './App'

function App4() {
  return (
    <div>
        <header>
        
  
 
  <Navbar bg="dark" variant="dark">
    
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://avatars.githubusercontent.com/u/6853419?s=200&v=4"
          width="30"
          height="30"
          
          className="d-inline-block align-top"
        />{' '}
        TableMaker.io
      </Navbar.Brand>

    <Nav className='ml-auto' >
        <Nav.Link href="Home"  style={{ color:"white" }} > Home  </Nav.Link>
        <Nav.Link href="Profile"  style={{ color:"white" }} > Profile  </Nav.Link>
    </Nav>


    
  </Navbar>
        </header>
        <br>
        </br>
        <br></br>
        <div className='badge-sec'>
            <h1>
              Welcome Back <Badge bg="secondary">Iyed</Badge>
            </h1>
        </div>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <div>
            <Container>
                <Row>
                    
                <Col>
                <Button variant="outline-primary" >
                    Add new Table
                </Button>
                </Col>
                <Col>
                <Button>
                    Check Table List
                </Button>

                </Col>
                <Col>
                <Button>
                    Export Table List 
                </Button>
                </Col>
           
                </Row>
            </Container>
            <br>
            </br>
            <br>
            </br>
            <Container>
              <Row>

              <Col>
            
              </Col>
             
              <Col>
              </Col>
              <Col>
             
              </Col>
              </Row>
              
            </Container>

            <br>
            </br>
            <br>
            </br>
            <Container>
              <Card>
              <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <App />
    <Card.Text>
     
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>

              </Card>
            </Container>

        </div>

        <footer>

        </footer>

    </div>
  )
}

export default App4;