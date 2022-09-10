import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddTicketFormComp } from "../../components/add-ticket-form/AddTicketFormComp";
import { BreadcrumbComp } from "../../components/breadcrumb/BreadcrumbComp";

export const AddTicketPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketFormComp />
        </Col>
      </Row>
    </Container>
  );
};
