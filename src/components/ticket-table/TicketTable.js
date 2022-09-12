import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const TicketTable = ({ tickets }) => {
  return (
    <>
      {!tickets.length ? (
        <p className="text-center fw-bold">No tickets to show</p>
      ) : (
        <Table striped bordered hover variant="info">
          <thead>
            <tr>
              <th>#</th>
              <th>Subjects</th>
              <th>Status</th>
              <th>Opened Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets.length &&
              tickets.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>
                    <Link to={`/ticket/${item.id}`}>{item.subject}</Link>
                  </td>
                  <td>{item.status}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
