const Pet = require("../models/pet.models");

const addNewPet = (req, res) => {
  const { name, type, description, skill1, skill2, skill3 } = req.body;
  Pet.create({
    name,
    type,
    description,
    skill1,
    skill2,
    skill3,
  })
    .then((newPet) => res.status(201).json({ newPet }))
    .catch((err) => res.json({ error: err }));
};

const getAllPet = (req, res) => {
  Pet.find()
    .then((pets) => res.status(200).json(pets))
    .catch((err) => res.json({ error: err }));
};

const deletePet = (req, res) => {
  Pet.findByIdAndDelete({ _id: req.params.id })
    .then((deletedPet) => res.json({ deletedPet }))
    .catch((err) => res.json({ error: err }));
};

const getOnePet = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .then((foundPet) => res.status(200).json({ foundPet }))
    .catch((err) => res.json({ error: err }));
};

const updatePet = (req, res) => {
  const { name, type, description, skill1, skill2, skill3 } = req.body;
  Pet.findOneAndUpdate(
    { _id: req.params.id },
    { name, type, description, skill1, skill2, skill3 },
    { new: true, runValidators: true }
  )
    .then((updatedPet) => res.status(200).json(updatedPet))
    .catch((err) => res.json({ error: err }));
};

module.exports = {
  addNewPet,
  getAllPet,
  deletePet,
  getOnePet,
  updatePet,
};
