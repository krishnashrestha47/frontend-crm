import React, { useState } from "react";
import { Login } from "../../components/login/Login";
import { PasswordResetComp } from "../../components/password-reset/PasswordResetComp";
import "./entryPage.css";

export const EntryPage = () => {
  return (
    <div className="entry-page bg-info">
      <div className="jumbotron form-box">
        <Login />

        <PasswordResetComp />
      </div>
    </div>
  );
};
