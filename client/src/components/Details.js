import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Details(props) {
  const [pet, setPet] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pets/${id}`)
      .then((res) => {
        setPet(res.data.foundPet);
      })
      .catch((err) => console.log(err));
  }, []);

  const onClickAdoptPet = () => {
    axios
      .delete(`http://localhost:8000/api/pets/${id}`)
      .then((res) => console.log(`${pet.name} has been adopted!`))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <Header />
        <Link
          to="../../"
          style={{
            margin: "30px 0 0 30px",
            border: "2px solid",
            padding: "5px",
            display: "inline-flex",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Back to Home
        </Link>
        <h3 style={{ margin: "15px 0 15px 30px" }}>
          Details about: {pet.name}
        </h3>
        <span>
          <Link
            to="/"
            onClick={onClickAdoptPet}
            style={{
              margin: "0px 0 0 30px",
              border: "2px solid",
              padding: "5px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Adopt {pet.name}
          </Link>
        </span>
      </div>
      <div
        style={{
          border: "2px solid black",
          margin: "30px 20px 20px 30px",
          padding: "20px 20px 20px 20px",
        }}
      >
        <div style={{ margin: "0 0 30px 0" }}>
          <h4 style={{ margin: "0px 70px 20px 0px", display: "inline" }}>
            Pet Type:{" "}
          </h4>
          <h4 style={{ display: "inline" }}>{pet.type}</h4>
        </div>
        <div>
          <h4 style={{ display: "inline", margin: "30px 50px 0px 0px" }}>
            Description:{" "}
          </h4>{" "}
          <h4 style={{ display: "inline" }}>{pet.description}</h4>
        </div>
        <div>
          <div>
            <h4 style={{ margin: "30px 50px 0px 0px" }}>Skills:</h4>
          </div>
          <div>
            <ul>
              <li>{pet.skill1}</li>
              <li>{pet.skill2}</li>
              <li>{pet.skill3}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
