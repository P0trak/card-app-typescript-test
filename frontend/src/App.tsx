import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllEntries from "./routes/AllEntries";
import EditEntry from "./routes/EditEntry";
import NewEntry from "./routes/NewEntry";
import Settings from "./routes/Settings";
import { EntryProvider } from "./utilities/globalContext";

export default function App() {
  return (
    <section>
      <Router>
        <EntryProvider>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<AllEntries />}></Route>
            <Route path="create" element={<NewEntry />}></Route>
            <Route path="edit/:id" element={<EditEntry />}></Route>!
            <Route path="settings" element={<Settings />}></Route>
          </Routes>
        </EntryProvider>
      </Router>
    </section>
  );
}
