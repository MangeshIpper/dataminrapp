import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { Toggle } from "rsuite";
import "../App.css";
import { FaPencilAlt, FaPlus, FaTrashAlt } from "react-icons/fa";

export const Menu = () => {
  const defaultUsers = [
    {
      id: 1,
      name: "Bob",
      address: "Dublin",
      age: 26,
      profession: "Software Engineer",
    },
    {
      id: 2,
      name: "John",
      address: "Galaway",
      age: 24,
      profession: "Software Engineer",
    },
  ];

  const initCurrentUser = {
    id: null,
    name: "",
    address: "",
    age: 10,
    profession: "",
  };

  const [users, setUsers] = useState(defaultUsers);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Card className="customCard">
            <Card.Body>
              <div className="d-flex justify-content-between customCardBody">
                <div>
                  <Card.Title>User Data</Card.Title>
                </div>
                <div className="d-flex">
                  <Toggle className="userToggleBtn" defaultChecked />
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    title="Add User"
                  >
                    <FaPlus />
                  </Button>
                </div>
              </div>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Profession</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Dublin</td>
                    <td>26</td>
                    <td>SE</td>
                    <td>
                      <Button variant="info" title="Edit user details">
                        <FaPencilAlt />
                      </Button>{" "}
                      <Button variant="danger" title="Delete user">
                        <FaTrashAlt />
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Dublin</td>
                    <td>26</td>
                    <td>SE</td>
                    <td>Delete</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>




        </Col>
      </Row>
    </Container>
  );
};
