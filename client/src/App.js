import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import AddNewPet from "./components/AddNewPet";
import Details from "./components/Details";
import editPet from "./components/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/api/pets/new" exact component={AddNewPet} />
          <Route path="/api/pets/:id" exact component={Details} />
          <Route path="/api/pets/:id/edit" exact component={editPet} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
