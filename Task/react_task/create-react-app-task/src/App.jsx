// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import React from "react";
import { Header } from "./components/static_task/Header";
import ProfileCard from "./components/static_task/ProfileCard";
import { Footer } from "./components/static_task/Footer";
import { DynamicHeader } from "./components/dynamic_task/DynamicHeader";
import { DynamicFooter } from "./components/dynamic_task/DynamicFooter";
import DynamicProfileCard from "./components/dynamic_task/DynamicProfileCard";
import students from "./components/dynamic_task/student";

function App() {
  function showCards() {
    document.getElementById("clickText").style.display = "none";
    document.getElementById("cards").style.display = "block";
  }

  return (
    <div className="min-vh-100 bg-light">
      <Header />

      <div className="d-flex justify-content-center mt-4">
        <ProfileCard />
      </div>

      <Footer />

      <div className="container bg-light mt-5 text-center">
        <button
          id="clickText"
          className="btn btn-danger px-4 py-2 shadow"
          onClick={showCards}
        >
          Click Here to see Output...
        </button>

        <div
          id="cards"
          style={{ display: "none" }}
        >
          <DynamicHeader />

          <div className="row justify-content-center g-4">
            {students.map((student, index) => (
              <div
                className="col-md-4 d-flex justify-content-center"
                key={index}
              >
                <DynamicProfileCard student={student} />
              </div>
            ))}
            <DynamicProfileCard />
          </div>
          <DynamicFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
