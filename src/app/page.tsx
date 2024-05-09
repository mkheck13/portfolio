"use client";

import React from "react";
import NavbarComponent from "./Components/NavbarComponent";
import SkillsComponent from "./Components/SkillsComponent";
import AboutMeComponent from "./Components/AboutMeComponent";
import ProjectsComponent from "./Components/ProjectsComponent";
import FooterComponent from "./Components/FooterComponent";

const page = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col  bg-[#121212]">
        <NavbarComponent />

        <div>
          <AboutMeComponent />

          <div>

          <SkillsComponent/>

            <ProjectsComponent />

            

            <FooterComponent/>

          </div>
        </div>
      </div>
    </>
  );
};
export default page;
