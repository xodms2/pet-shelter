import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useParams, useHistory } from "react-router-dom";
import "../style/style.css";

function EditPet() {
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [pet, setPet] = useState({
    name: "",
    type: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: "",
  });
  const [editPet, setEditPet] = useState({
    name: "",
    type: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: "",
  });

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      axios
        .get(`http://localhost:8000/api/pets/${id}`)
        .then((res) => {
          setEditPet(res.data.foundPet);
        })
        .catch((err) => console.log(err));
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const onChangeUpdatePetHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEditPet((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClickUpdatePetHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/pets/${id}`, editPet)
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          setErrors(res.data.errors);
          console.log(res.data.errors);
        }
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
  console.log("HERE =>", editPet.name);

  return (
    <>
      <Header />
      <span>
        <Link
          to="../../../"
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
      <div>
        <h4 style={{ margin: "30px", display: "inline-block" }}>Edit</h4>
        <h4 style={{ display: "inline-block" }}>{editPet.name}</h4>
      </div>
      <form
        style={{
          width: "95%",
          border: "2px solid black",
          padding: "30px 0 0 0",
          marginLeft: "30px",
        }}
      >
        <div style={{ display: "inline-block", width: "60%" }}>
          <div class="bottomMargin">
            <label htmlFor="name" class="label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => onChangeUpdatePetHandler(e)}
              defaultValue={editPet.name}
              required
            />
            {editPet.name === "" ? (
              <span style={{ color: "red" }}>Name required</span>
            ) : editPet.name.length < 3 ? (
              <span style={{ color: "red" }}>
                Name must be at least 3 characters
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
              defaultValue={editPet.type}
              onChange={(e) => onChangeUpdatePetHandler(e)}
              required
            />
            {editPet.type === "" ? (
              <span style={{ color: "red" }}>Type required</span>
            ) : editPet.type.length < 3 ? (
              <span style={{ color: "red" }}>
                Type must be at least 3 characters
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
              defaultValue={editPet.description}
              onChange={(e) => onChangeUpdatePetHandler(e)}
              required
            />
            {editPet.description === "" ? (
              <span style={{ color: "red" }}>Description required</span>
            ) : editPet.description.length < 3 ? (
              <span style={{ color: "red" }}>
                Must be at least 3 characters
              </span>
            ) : (
              <span></span>
            )}
          </div>
        </div>
        <div style={{ width: "40%", display: "inline-block" }}>
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
              defaultValue={editPet.skill1}
              onChange={(e) => onChangeUpdatePetHandler(e)}
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
              defaultValue={editPet.skill2}
              onChange={(e) => onChangeUpdatePetHandler(e)}
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
              defaultValue={editPet.skill3}
              onChange={(e) => onChangeUpdatePetHandler(e)}
            />
          </div>
        </div>
        <button
          disabled={
            editPet.name.length < 3 ||
            editPet.name === "" ||
            editPet.type.length < 3 ||
            editPet.type === "" ||
            editPet.description === "" ||
            editPet.description.length < 3
              ? true
              : false
          }
          type="submit"
          onClick={onClickUpdatePetHandler}
          style={{ margin: "30px" }}
        >
          Update Pet
        </button>
      </form>
    </>
  );
}

export default EditPet;
