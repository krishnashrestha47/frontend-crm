import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const handleOnChange = () => {};
const handleOnSubmit = () => {};

export const AddTicketFormComp = () => {
  return (
    <div className="jumbotron">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              onChange={handleOnChange}
              name="subject"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              onChange={handleOnChange}
              name="issueDate"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Describe
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              onChange={handleOnChange}
              name="details"
              required
            />
          </Col>
        </Form.Group>
        <div className="text-end mt-3">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
