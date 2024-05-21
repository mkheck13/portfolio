"use client";

import React from "react";
import NavbarComponent from "../Components/NavbarComponent";
import SkillsComponent from "../Components/SkillsComponent";
import AboutMeComponent from "../Components/AboutMeComponent";
import ProjectsComponent from "../Components/ProjectsComponent";
import FooterComponent from "../Components/FooterComponent";

const Home = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col  bg-[#121212]">
        <NavbarComponent />

        <div className="container mx-auto mt-24 px-12 py-4">
          <AboutMeComponent />

          

          <SkillsComponent/>

            <ProjectsComponent />

            

            <FooterComponent/>

       
        </div>
      </div>
    </>
  );
};
export default Home;
