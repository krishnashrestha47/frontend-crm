import React from "react";
import { Table } from "react-bootstrap";

export const TicketTable = () => {
  return (
    <div>
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
          <tr>
            <td>1</td>
            <td>ssl issue</td>
            <td>client response pending</td>
            <td>2022/02/22</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
