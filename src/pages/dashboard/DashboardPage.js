import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable";

const DashboardPage = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button className="btn btn-lg" variant="info">
            Add new Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total tickets: 50</div>
          <div>Pending tickets: 10</div>
        </Col>
      </Row>
      <Row>
        <Col className="mb-2">Recently Added Tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-tickets">
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
