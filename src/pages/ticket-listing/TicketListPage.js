import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BreadcrumbComp } from "../../components/breadcrumb/BreadcrumbComp";
import { SearchFormComp } from "../../components/search-form/SearchFormComp";
import { TicketTable } from "../../components/ticket-table/TicketTable";

import tickets from "../../asset/data/dummy-tickets.json";
import { Link } from "react-router-dom";

export const TicketListPage = () => {
  const [str, setStr] = useState("");
  const [displayTicket, setDisplayTicket] = useState(tickets);

  useEffect(() => {}, [str, displayTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    handleOnSearch(value);
  };

  const handleOnSearch = (str) => {
    const filteredSearch = tickets.filter((item) =>
      item.subject.toLowerCase().includes(str).toLowerCase()
    );
    setDisplayTicket(filteredSearch);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="Ticket List"></BreadcrumbComp>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-end">
          <SearchFormComp handleOnChang={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <TicketTable tickets={displayTicket} />
        </Col>
      </Row>
    </Container>
  );
};
