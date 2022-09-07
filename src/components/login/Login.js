import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const initialState = {
  email: "",
  password: "",
};

export const Login = () => {
  const [formDt, setFormDt] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDt({ ...formDt, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formDt);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="text-center">Client Login</h3>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                onChange={handleOnChange}
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handleOnChange}
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col className="text-end">
          <a href="#!">Forgot Password?</a>
        </Col>
      </Row>
    </Container>
  );
};
