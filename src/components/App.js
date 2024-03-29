import React, { useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import reducer from "../reducers/index.js";
import EventForm from "./EventForm.js";
import Events from "./Events.js";
import AppContext from "../contexts/AppContext.js";
import OperationLogs from "./OperationLogs.js";

const APP_KEY = "appWithRedux";

const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState
    ? JSON.parse(appState)
    : { events: [], operationLogs: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

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
