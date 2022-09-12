import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BreadcrumbComp } from "../../components/breadcrumb/BreadcrumbComp";

import { MessageHistory } from "../../components/message-history/MessageHistory";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket";

import tickets from "../../asset/data/dummy-tickets.json";

const ticket = tickets[0];

export const TicketPage = () => {
  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {}, [message]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert(message);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="Ticket" />
        </Col>
      </Row>

      <Row>
        <Col className="fw-bold text-secondary">
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="date">Subject: {ticket.date}</div>
          <div className="status">Subject: {ticket.status}</div>
        </Col>
        <Col>
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            handleOnChange={handleOnChange}
            msg={message}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
