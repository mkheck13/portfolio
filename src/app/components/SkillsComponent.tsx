"use client";

import { Card } from "flowbite-react";
import React from "react";

import unity from "../Assets/unity.png";
import postman from "../Assets/postman.png";

export default function SkillsComponent() {
  return (
    <>
      <Card href="#" className="max-w-sm">
        <h1>Skills and Tools</h1>
        <div >
          <div className="d-flex align-items-center mt-4">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <span className="text">React</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg"
            />
            <span className="text">.NET</span>
          </div>

          <div className="d-flex align-items-center mt-3">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            />
            <span className="text">Tailwind</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            />
            <span className="text">Bootstrap</span>
          </div>

          <div className="d-flex align-items-center mt-3">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
            />
            <span className="text">C#</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <span className="text">Javascript</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <span className="text">Typescript</span>
          </div>
        </div>

        <div>
          <div className="d-flex align-items-center mt-4">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <span className="text">HTML</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
            <span className="text">CSS</span>
          </div>

          <div className="d-flex align-items-center mt-4">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
            />
            <span className="text">Azure</span>
          </div>

          <div className="d-flex align-items-center mt-3">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            />
            <span className="text">VS Code</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
            />
            <span className="text">Visual Studio</span>
          </div>

          <div className="d-flex align-items-center mt-4">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            />
            <span className="text">Figma</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <img className="icon" src={unity} />
            <span className="text">Unity</span>
          </div>

          <div className="d-flex align-items-center mt-3">
            <img className="icon" src={postman} />
            <span className="text">Postman</span>
          </div>

          <div className="d-flex align-items-center mt-3">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
            />
            <span className="text">Jira</span>
          </div>
        </div>
      </Card>
    </>
  );
}
