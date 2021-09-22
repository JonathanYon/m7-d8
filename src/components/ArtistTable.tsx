import { Component } from "react";
import { Table } from "react-bootstrap";

class ArtistTable extends Component {
  render() {
    return (
      <Table striped bordered hover style={{ width: "70%" }} className="ml-5">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
export default ArtistTable;
