import React from "react";
import { Link } from "react-router-dom";
import "../styles/ThankYou.css";

function ThankYou() {
  return (
    <div>
      <div className="ty-bg">
        <div className="msg-ctn">
          <div className="check">
            <h1 className="msg-sent">Message Sent</h1>
            <span class="label__check">
              <span class="label__icon">&#10004;</span>
            </span>
          </div>

          <Link className="btn-learn-ty" to="/">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
