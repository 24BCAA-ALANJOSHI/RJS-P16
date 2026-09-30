import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h2>Home</h2>
      <p>Welcome to the Home Page.</p>
    </div>
  );
}

function Aboutus() {
  return (
    <div className="page">
      <h2>About Us</h2>
      <p>This page provides information about our website.</p>
    </div>
  );
}

function Contactus() {
  return (
    <div className="page">
      <h2>Contact Us</h2>
      <p>You can contact us through this page.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <h1>My React Website</h1>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/aboutus">Aboutus</Link>
            <Link to="/contactus">Contactus</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
