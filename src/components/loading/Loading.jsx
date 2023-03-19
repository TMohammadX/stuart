import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <div className="l-c">
      <div class="loader">
        <div class="loader-inner">
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
        </div>
      </div>
    </div>
  );
}
