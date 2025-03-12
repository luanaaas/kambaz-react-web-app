import Kambaz from "./Kambaz";
import Labs from "./Labs";
import store from "./Kambaz/store";
import { Provider } from "react-redux";

import { HashRouter, Navigate, Route, Routes } from "react-router";
// import "./App.css";
function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div>
        <Routes>
         <Route path="/" element={<Navigate to="/Kambaz" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path ="/Kambaz/*" element={<Kambaz />} />
          <Route path ="/Project" element={<h1>Project</h1>} />
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );

}

export default App
