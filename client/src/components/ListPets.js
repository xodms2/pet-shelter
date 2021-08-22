import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListPets() {
  const [pet, setPet] = useState([]);
  const [sorted, setSorted] = useState([]);
  useEffect(
    () =>
      axios
        .get("http://localhost:8000/api/pets")
        .then((res) => {
          setPet(res.data);
        })
        .catch((err) => console.log(err)),
    []
  );

  //   setPet(pets);
  // axios
  // .get(`http://localhost:8000/api/pet/${id}`)
  // .then((res) => console.log(res))
  // .catch((err) => console.log(err));

  const onClickSortingHandler = () => {
    setSorted(
      pet.sort(function (a, b) {
        let typeA = a.type.toLowerCase(),
          typeB = b.type.toLowerCase();
        if (typeA < typeB)
          //sort string ascending
          return -1;
        if (typeA > typeB) return 1;
        return 0; //default return value (no sorting)
      })
    );
  };

  return (
    <>
      <button
        onClick={onClickSortingHandler}
        style={{ margin: "0px 0px 15px 30px" }}
      >
        Sort
      </button>
      <table
        style={{
          margin: "0 0 0 30px",
          width: "60%",
          border: "3px solid black",
        }}
      >
        <tbody>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
          {pet.map((pet, i) => (
            <tr key={i}>
              <td style={{ textAlign: "center" }}>{pet.name}</td>
              <td style={{ textAlign: "center" }}>{pet.type}</td>
              <td style={{ textAlign: "center" }}>
                <Link to={`/api/pets/${pet._id}`} style={{ margin: "10px" }}>
                  Details
                </Link>
                <span>||</span>
                <Link
                  to={`/api/pets/${pet._id}/edit`}
                  style={{ margin: "10px" }}
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ListPets;
