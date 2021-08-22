import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import ListPets from "../components/ListPets";

function Main() {
  return (
    <>
      <div>
        <Header />
        <Link
          to="/api/pets/new"
          style={{
            margin: "30px 0 0 30px",
            border: "2px solid",
            padding: "5px",
            display: "inline-flex",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          add a pet to the shelter
        </Link>
        <h4 style={{ margin: "30px" }}>
          These pets are looking for a good home
        </h4>
      </div>
      <div>
        <ListPets />
      </div>
    </>
  );
}

export default Main;
