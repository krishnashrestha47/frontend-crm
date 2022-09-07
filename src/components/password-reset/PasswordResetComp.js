import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const PasswordResetComp = ({ handleOnShow }) => {
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="text-center">Forgot your password</h3>
          <hr />
          <p>
            Please enter your email address below to receive a password reset
            link
          </p>
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
            <Button variant="primary" type="submit">
              Reset my password
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col className="text-end">
          <a href="#!">Go to login</a>
        </Col>
      </Row>
    </Container>
  );
};
