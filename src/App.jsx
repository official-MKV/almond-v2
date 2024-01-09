import { useState, lazy } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Security = lazy(() => import("../src/pages/Security"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/how-we-secure-your-money" element={<Security />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
