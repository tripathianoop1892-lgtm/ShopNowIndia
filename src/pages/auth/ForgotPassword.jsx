import React from "react";
import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <div id="new">
      <form>
        <h1>Create New Password</h1>

        <div id="form1">
          <h2>New Password</h2>
          <input type="password" placeholder="Enter Password" />
        </div>

        <div id="form1">
          <h2>Confirm Password</h2>
          <input type="password" placeholder="Confirm Password" />
        </div>

        <div id="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;