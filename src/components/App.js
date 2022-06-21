import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import reducer from "../reducers/index.js";
import EventForm from "./EventForm.js";
import Events from "./Events.js";
import AppContext from "../contexts/AppContext.js";

const App = () => {
  const initialState = { events: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
