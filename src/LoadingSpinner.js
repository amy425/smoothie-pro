import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./App.css";

export default function LoadingSpinner() {
  return (
    <div className="LoadingSpinner">
      <Spinner animation="border" className="loading-spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
