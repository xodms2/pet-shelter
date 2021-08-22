const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
  app.post("/api/pets", PetController.addNewPet);
  app.get("/api/pets", PetController.getAllPet);
  app.get("/api/pets/:id", PetController.getOnePet);
  app.delete("/api/pets/:id", PetController.deletePet);
  app.put("/api/pets/:id", PetController.updatePet);
};
