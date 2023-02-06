import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeUZ from "./Contents/HomeUZ";
import HomeRU from "./Contents/HomeRU";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomeUZ />} />
      < Route path="/splashUZ" element={<HomeUZ />} />
      <Route path="/splashRU" element={<HomeRU />} />
    </Routes>
  );
}

export default App;
