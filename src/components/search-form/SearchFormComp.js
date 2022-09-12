import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export const SearchFormComp = ({ handleOnChange, str }) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Col>
            <Form.Control
              onChange={handleOnChange}
              value={str}
              name="searchStr"
              placeholder="search ..."
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
