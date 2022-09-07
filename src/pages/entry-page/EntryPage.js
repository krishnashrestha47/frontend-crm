import React from "react";
import { Login } from "../../components/login/Login";
import "./entryPage.css";

export const EntryPage = () => {
  return (
    <div className="entry-page bg-info">
      <div className="jumbotron form-box">
        <Login />
      </div>
    </div>
  );
};
