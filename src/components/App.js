import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import reducer from "../reducers/index.js";
import EventForm from "./EventForm.js";
import Events from "./Events.js";
import AppContext from "../contexts/AppContext.js";
import OperationLogs from "./OperationLogs.js";

const App = () => {
  const initialState = { events: [], operationLogs: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
