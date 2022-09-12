import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BreadcrumbComp } from "../../components/breadcrumb/BreadcrumbComp";
import { TicketTable } from "../../components/ticket-table/TicketTable";
import tickets from "../../asset/data/dummy-tickets.json";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/add-ticket">
            <Button className="btn btn-lg" variant="info">
              Add new Ticket
            </Button>
          </Link>
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
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
