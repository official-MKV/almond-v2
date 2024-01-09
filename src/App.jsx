import { useState, lazy } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

const Security = lazy(() => import("../src/pages/Security"));

function App() {
  ReactGA.initialize("G-0WVKTQ5G6G");
  ReactGA.send({ hitType: "pageview", page: "/", title: "Home page" });
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
