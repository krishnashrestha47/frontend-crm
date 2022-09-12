import React from "react";
import { Button, Form } from "react-bootstrap";

export const UpdateTicket = ({ handleOnChange, msg, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Control
        as="text-area"
        row="5"
        value={msg}
        name="detail"
        onChange={handleOnChange}
        placeholder="Please reply your message here on update the ticket"
      />
      <div className="text-end mt-3 mb-2 p-2">
        <Button variant="info" type="submit">
          Reply <i class="fa-sharp fa-solid fa-reply-all"></i>
        </Button>
      </div>
    </Form>
  );
};
