import './App.css';
import React from "react"
import Data from './Data';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillFacebook, AiFillTwitterSquare, } from 'react-icons/ai'
import { BsLinkedin } from "react-icons/bs"
import { FaBeer } from 'react-icons/fa';


class App extends React.Component {
  state = {
    info: Data,
  }
  render() {

    let content = this.state.info.map((item, i) => {
      return (
        <>

          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home"><img src={item.navbar.logo} alt="" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className='' id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className='ms-4 text-black fw-semibold' href="#home">{item.navbar.nvli1}</Nav.Link>
                  <Nav.Link className='ms-4 text-black fw-semibold' href="#link">{item.navbar.nvli2}</Nav.Link>

                  <NavDropdown className='ms-4 text-black fw-semibold' title={item.navbar.nvli3} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown className='ms-4 text-black fw-semibold' title={item.navbar.nvli4} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link className='ms-4 text-black fw-semibold' href="#link">{item.navbar.nvli5}</Nav.Link>
                  <Nav.Link className='ms-4 text-black fw-semibold' href="#link">{item.navbar.nvli6}</Nav.Link>

                </Nav>

                <Nav.Link href="#link" className='d-flex align-items-center'>
                  <Nav.Link href="#link" className='me-2 text-dark fs-3'><AiFillFacebook /></Nav.Link>
                  <Nav.Link href="#link" className='me-2 text-dark fs-3'><AiFillTwitterSquare /></Nav.Link>
                  <Nav.Link href="#link" className='me-2 text-dark fs-5'><BsLinkedin /></Nav.Link>
                </Nav.Link>

              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Container fluid className='w-100 sec1' style={{
            backgroundImage: `url(${item.section1.bgimg})`,
            height: "100vh",
            backgroundPosition: "right",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "50px",
          }}>
            <h5 className='text-light fw-semibold '>{item.section1.s1t1}</h5>
            <h1 className='text-light fw-bold'>{item.section1.s1t2}</h1>
            <p className='text-light fw-semibold'>{item.section1.s1t3}</p>
            <button className='bg-success rounded-pill border-0 text-light p-3'>{item.section1.s1t4}</button>
          </Container>


          <Container fluid className="sec1 d-flex align-items-center pt-5 pb-5">
            <Row className="m-0 p-0 w-100">

              <Col lg={3} md={3} sm={12} xs={12} className='d-flex flex-column justify-content-center align-items-center'>
                <i><FaBeer /></i>
                <p className='mt-2 fw-semibold'>{item.section2.s2t1}</p>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className='d-flex flex-column justify-content-center align-items-center'>
                <i><FaBeer /></i>
                <p className='mt-2 fw-semibold'>{item.section2.s2t1}</p>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className='d-flex flex-column justify-content-center align-items-center'>
                <i><FaBeer /></i>
                <p className='mt-2 fw-semibold'>{item.section2.s2t1}</p>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className='d-flex flex-column justify-content-center align-items-center'>
                <i><FaBeer /></i>
                <p className='mt-2 fw-semibold'>{item.section2.s2t1}</p>
              </Col>

            </Row>
          </Container>



          <Container fluid className="sec1 d-flex align-items-center pt-5 pb-5">
            <Row className="m-0 p-0">

              <Col lg={6} md={6} sm={12} xs={12}  >
                <img className='w-100' src={item.section3.s3img1} alt="" />
              </Col>

              <Col lg={6} md={6} sm={12} xs={12} className='pe-3 ps-3'>
                <p className='mt-3 mb-5 text-success'>{item.section3.s3t1}</p>
                <h1 className='fw-bold'>{item.section3.s3t2}</h1>
                <p className='mt-3 mb-5 text-success'>{item.section3.s3t3}</p>
                <h5 className='fw-semibold'>{item.section3.s3t4}</h5>
                <p>{item.section3.s3t7}</p>
                <h5 className='fw-semibold'>{item.section3.s3t5}</h5>
                <p>{item.section3.s3t7}</p>
                <h5 className='fw-semibold'>{item.section3.s3t6}</h5>
                <p>{item.section3.s3t7}</p>
                <h5 className='fw-semibold'>{item.section3.s3t9}</h5>
                <p>{item.section3.s3t7}</p>
                <button className='bg-primary border-0 text-light p-4 mt-3'>{item.section3.s3t8}</button>

              </Col>

            </Row>
          </Container>



          <Container fluid className="sec1 d-flex align-items-center pt-5 pb-5">
            <Row className="m-0 p-0">

              <Col lg={6} md={6} sm={12} xs={12} className='pe-5 ps-4'>
                <p className='mt-3 mb-5 text-success'>{item.section4.s4t1}</p>
                <h1 className='fw-bold'>{item.section4.s4t2}</h1>
                <p className='mt-4'>{item.section4.s4t3}</p>
              </Col>

              <Col lg={6} md={6} sm={12} xs={12} className='pe-3 ps-3'>

                <Row className='gap-4 d-flex justify-content-center'>
                  <Col lg={3} md={6} sm={12} xs={12} className='bg-primary p-5 rounded d-flex flex-column justify-content-center align-items-center' >
                    <i className='text-light'><FaBeer /></i>
                    <p className='mt-2 text-light fw-semibold'>{item.section2.s2t1}</p>
                  </Col>
                  <Col lg={3} md={6} sm={12} xs={12} className='bg-success p-5 d-flex rounded flex-column justify-content-center align-items-center' >
                    <i className='text-light'><FaBeer /></i>
                    <p className='mt-2 text-light fw-semibold'>{item.section2.s2t1}</p>
                  </Col>
                  <Col lg={3} md={6} sm={12} xs={12} className='bg-primary p-5 d-flex rounded flex-column justify-content-center align-items-center' >
                    <i className='text-light'><FaBeer /></i>
                    <p className='mt-2 text-light fw-semibold'>{item.section2.s2t1}</p>
                  </Col>
                </Row>

                <Row className='gap-4 mt-4 d-flex justify-content-center'>
                  <Col lg={3} md={6} sm={12} xs={12} className='bg-success p-5 d-flex rounded flex-column justify-content-center align-items-center' >
                    <i className='text-light'><FaBeer /></i>
                    <p className='mt-2 text-light fw-semibold'>{item.section2.s2t1}</p>
                  </Col>
                  <Col lg={3} md={6} sm={12} xs={12} className='bg-primary rounded p-5 d-flex flex-column justify-content-center align-items-center' >
                    <i className='text-light'><FaBeer /></i>
                    <p className='mt-2 text-light fw-semibold'>{item.section2.s2t1}</p>
                  </Col>
                  <Col lg={3} md={6} sm={12} xs={12} className='bg-success p-5 rounded d-flex flex-column justify-content-center align-items-center' >
                    <i className='text-light'><FaBeer /></i>
                    <p className='mt-2 text-light fw-semibold'>{item.section2.s2t1}</p>
                  </Col>
                </Row>

              </Col>
            </Row>
          </Container>


          <Container className="sec1 d-flex align-items-center pt-5 pb-5">
            <Row className="m-0 p-0">

              <Col lg={6} md={6} sm={12} xs={12}  >
                <img className='w-100' src={item.section5.s5img1} alt="" />
              </Col>

              <Col lg={6} md={6} sm={12} xs={12} className='pe-3 ps-3'>
                <p className='mt-3 mb-5 text-success'>{item.section5.s5t1}</p>
                <h1 className='fw-bold'>{item.section5.s5t2}</h1>
                <p className='mt-3 mb-5'>{item.section5.s5t3}</p>
                <button className='bg-primary rounded border-0 text-light p-4 mt-3'>{item.section3.s3t8}</button>

              </Col>

            </Row>
          </Container>


          <Container fluid className="sec1 bg-success d-flex align-items-center pt-5 pb-5">
            <Row className="m-0 p-0">

              <Col lg={6} md={6} sm={12} xs={12} className='ps-5 pe-3'>
                <p className='mt-3 mb-5 text-light'>{item.section6.s6t1}</p>
                <h1 className='fw-bold text-light'>{item.section6.s6t2}</h1>
              </Col>

              <Col lg={6} md={6} sm={12} xs={12} className='pe-4 ps-4'>
                <p className='mt-3 mb-5 text-light'>{item.section6.s6t3}</p>
                <h1 className='fw-bold text-light'>{item.section6.s6t4}</h1>
              </Col>

            </Row>
          </Container>

          <Container fluid className="sec1 bg-light pt-5 pb-5">
            <p className='text-center text-success'>{item.section7.s7t1}</p>
            <h1 className='text-center mt-3 fw-bold'>{item.section7.s7t2}</h1>

            <Row className="m-0 p-0">

              <Col lg={3} md={3} sm={12} xs={12}>
                <img src={item.section7.s7img1} alt="" />
                <p className='mt-3 text-black text-center'>{item.section7.s7t3}</p>
                <p className='fw-bold text-black text-center'>{item.section7.s7t4}</p>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} >
                <img src={item.section7.s7img2} alt="" />
                <p className='mt-3 text-black text-center'>{item.section7.s7t5}</p>
                <p className='fw-bold text-black text-center'>{item.section7.s7t6}</p>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} >
                <img src={item.section7.s7img3} alt="" />
                <p className='mt-3 text-black text-center'>{item.section7.s7t7}</p>
                <p className='fw-bold text-black text-center'>{item.section7.s7t8}</p>
              </Col>
              <Col lg={3} md={3} sm={12} xs={12}  >
                <img src={item.section7.s7img4} alt="" />
                <p className='mt-3 text-black text-center'>{item.section7.s7t9}</p>
                <p className='fw-bold text-black text-center'>{item.section7.s7t10}</p>
              </Col>

            </Row>
          </Container>

          <Container fluid className="sec1 bg-primary pt-5 pb-5">
            <Row className="m-0 p-0">

              <Col lg={8} md={6} sm={12} xs={12} className='ps-5 pe-3'>
                <h1 className='mt-3 mb-5 fw-bold text-light'>{item.section8.s8t1}</h1>
                <p className='text-light'>{item.section8.s8t2}</p>
              </Col>

              <Col lg={4} md={6} sm={12} xs={12} className='pe-4 ps-4 d-flex justify-content-center align-items-center'>
                <button className='bg-light text-dark border-0 text-light p-3'>{item.section1.s1t4}</button>
              </Col>

            </Row>
          </Container>




          <Container fluid className="sec1 p-0 m-0 bg-secondary">
            <Row className="m-0 p-0">

              <Col lg={3} md={3} sm={12} xs={12} className='ps-5 m-0 d-flex justify-content-center align-items-center'>
              <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrt1}</li>
                  <li className='text-light mt-4'>{item.Footer.ftrt2}</li>
                </ul>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className=' p-5'>
                <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrli1}</li>
                  <li className='text-light mt-4'>{item.Footer.ftrli2}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli3}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli4}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli5}</li>
                </ul>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className=' p-5 '>
                <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrli6}</li>
                  <li className='text-light mt-4'>{item.Footer.ftrli7}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli8}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli9}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli10}</li>
                </ul>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className=' p-5'>
                <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrli11}</li>
                  <li className='text-light mt-4'>{item.Footer.ftrli12}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli13}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli14}</li>
                </ul>
              </Col>


            </Row>
          </Container>





        </>
      )
    })

    return (
      <>
        {content}
      </>
    )
  }
}


export default App;
