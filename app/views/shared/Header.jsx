import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';


const Header = (props) => {



    return (
        <>
            <Navbar bg="primary" variant="dark" style={{ paddingRight: "10px", paddingLeft: "10px" }}>
        <Navbar.Brand href="/">Project Explorer</Navbar.Brand>

        <Navbar style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
          <Nav className="">
            <Form inline style={{ display: "flex", marginRight: "5px" }}>
              <FormControl type="text" placeholder="Search Projects" style={{ marginRight: "10px" }} />
              <Button variant="outline-light">Search</Button>
            </Form>
            <Nav.Link href="/project/:id">Project</Nav.Link>
            <Nav.Link href="/projects/submit">Submit</Nav.Link>
          </Nav>


          
            {props.us ? (
            
            <Nav className="justify-content-end">
                <Nav.Link href="/logout" >Logout</Nav.Link>
                <Navbar.Text id='username'>{`Hi, ${props.us.firstname}`}</Navbar.Text>
            </Nav>
            )
            :(

                <Nav className="justify-content-end">
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            )
            }
          
        </Navbar>


      </Navbar>
        </>
    )

}

export default Header;