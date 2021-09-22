import React, { ChangeEvent, Component, Dispatch } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

interface NavTopProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

class NavTop extends Component<NavTopProps> {
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.setQuery(e.target.value);
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            value={this.props.query}
            className="mr-sm-2"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              this.handleChange(e)
            }
          />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}
export default NavTop;
