import React, { useState } from "react";
import { Login } from "../../components/login/Login";
import { PasswordResetComp } from "../../components/password-reset/PasswordResetComp";
import "./entryPage.css";

export const EntryPage = () => {
  const [show, setShow] = useState(true);
  const handleOnShow = () => {
    setShow(!show);
  };

  return (
    <div className="entry-page bg-info">
      <div className="jumbotron form-box">
        {show ? (
          <Login handleOnShow={handleOnShow} />
        ) : (
          <PasswordResetComp handleOnShow={handleOnShow} />
        )}
      </div>
    </div>
  );
};
