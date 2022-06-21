import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import reducer from "../reducers/index.js";
import EventForm from "./EventForm.js";
import Events from "./Events.js";
import AppContext from "../contexts/AppContext.js";

console.log({ AppContext });

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={"Hello, I am a Provider."}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
