import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../style/style.css";

function AddNewPet() {
  const [newPet, setNewPet] = useState({
    name: "",
    type: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: "",
  });

  const onChangeNewPetHandler = (e) => {
    const { name, value } = e.target;
    setNewPet((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClickAddNewPetHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pets", newPet)
      .then((res) => {
        console.log(res);
        window.history.back();
      })
      .catch((err) => console.log(err));
  };

  //   const onClickGetPetHandler = (id) => {
  //     axios
  //       .get(`http://localhost:8000/api/pet/${id}`)
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   };

  //   const onClickDeletePetHandler = (id) => {
  //     console.log(id);
  //     // axios.delete(`http://localhost:8000/api/pet/${id}`);
  //   };

  //   const onChangeEditPetHandler = (e) => {
  //     console.log(e.target.value);
  //   };

  return (
    <>
      <Header />
      <span>
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
      </span>
      <h4 style={{ margin: "30px" }}>Know a pet needing a home?</h4>
      <div style={{ border: "2px solid", margin: "30px", padding: "10px" }}>
        {/* {pets.map((pet, i) => (
        // <div key={i}>
        //   <span>{pet.id}.</span>
        //   <span>{pet.name}</span> <span>{pet.type}</span>
        //   <button>EDIT</button>
        //   <button onClick={() => onClickDeletePetHandler(pet.id)}>
        //     Delete
        //   </button>
        // </div>
        <div key={i}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={pet.name}
            onChange={(e) => onChangeEditPetHandler(e)}
          />
        </div>
      ))} */}
        <div
          style={{ display: "inline-block", width: "60%", paddingTop: "10px" }}
        >
          <div class="bottomMargin">
            <label htmlFor="name" class="label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => onChangeNewPetHandler(e)}
              required
              style={{}}
            />
            {newPet.name === "" ? (
              <span style={{ color: "red" }}>Name required</span>
            ) : newPet.name.length < 3 ? (
              <span style={{ color: "red" }}>
                Must be at least 3 characters
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div class="bottomMargin">
            <label htmlFor="type" class="label">
              Type
            </label>
            <input
              type="text"
              name="type"
              id="type"
              onChange={(e) => onChangeNewPetHandler(e)}
              required
            />
            {newPet.type === "" ? (
              <span style={{ color: "red" }}>Type required</span>
            ) : newPet.type.length < 2 ? (
              <span style={{ color: "red" }}>
                Must be at least 2 characters
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div class="bottomMargin">
            <label htmlFor="description" class="label">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              onChange={(e) => onChangeNewPetHandler(e)}
              required
            />
            {newPet.description === "" ? (
              <span style={{ color: "red" }}>Description required</span>
            ) : newPet.description.length < 3 ? (
              <span style={{ color: "red" }}>
                Must be at least 3 characters
              </span>
            ) : (
              <span></span>
            )}
          </div>
        </div>
        <div style={{ display: "inline-block", width: "40%" }}>
          <div class="bottomMargin">
            <div>
              <h4 class="">Skills (optional): </h4>
            </div>
            <label htmlFor="skill1" class="label">
              Skill 1:
            </label>
            <input
              type="text"
              name="skill1"
              id="skill1"
              onChange={(e) => onChangeNewPetHandler(e)}
            />
          </div>
          <div class="bottomMargin">
            <label htmlFor="skill2" class="label">
              Skill 2:
            </label>
            <input
              type="text"
              name="skill2"
              id="skill2"
              onChange={(e) => onChangeNewPetHandler(e)}
            />
          </div>
          <div class="bottomMargin">
            <label htmlFor="name" class="label">
              Skill 3:
            </label>
            <input
              type="text"
              name="skill3"
              id="skill3"
              onChange={(e) => onChangeNewPetHandler(e)}
            />
          </div>
        </div>
        <button
          disabled={
            newPet.name.length < 3 ||
            newPet.name === "" ||
            newPet.type.length < 3 ||
            newPet.type === "" ||
            newPet.description === ""
              ? true
              : false
          }
          onClick={onClickAddNewPetHandler}
        >
          Add new pet
        </button>
      </div>
    </>
  );
}

export default AddNewPet;
