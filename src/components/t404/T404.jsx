import React from "react";
import Hover from "../hover/Hover";
import { Link } from "react-router-dom";

export default function T404() {
  return (
    <div className="t4-1">
      <Hover />
      <div className="t4">
        <div className="t4-con">
          <div>
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
          </div>
          <Link to="/" className="t4-btn">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
