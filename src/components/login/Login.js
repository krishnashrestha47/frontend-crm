import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const Login = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3 className="text-center">Client Login</h3>
          <hr />
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
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
