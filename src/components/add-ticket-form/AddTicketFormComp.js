import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { shortText } from "../../utils/validation.js";

import "./AddTicketFormComp.css";

const initialFormData = {
  subject: "",
  issueDate: "",
  detail: "",
};

const initialFormError = {
  subject: false,
  issueDate: false,
  detail: false,
};

export const AddTicketFormComp = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErr, setFormErr] = useState(initialFormError);

  useEffect(() => {}, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFormErr(initialFormError);
    const isSubjectValid = await shortText(formData.subject);

    setFormErr({
      ...initialFormError,
      subject: !isSubjectValid,
    });

    console.log(formData);
  };

  return (
    <div className="jumbotron mt-5 add-new-ticket">
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
            <Form.Text className="text-danger">
              {formErr.subject && "subject is required!"}
            </Form.Text>
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
              rows="5"
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
