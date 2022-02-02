import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
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
                      <Button variant="info">
                        <FaPencilAlt />
                      </Button>{" "}
                      <Button variant="danger">
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

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          
        </Col>
      </Row>
    </Container>
  );
};
