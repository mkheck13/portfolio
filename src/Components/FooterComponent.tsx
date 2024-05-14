"use client";

import Image from "next/image";
import React from "react";
import gitLogo from "../Assets/github-mark-white.png";


const FooterComponent = () => {
  return (
    <>
      <div id="ContactMe" className="min-h-[200px] text-teal-500">
        <div className="mx-20 flex justify-between">
          <div className="text-lg space-y-2 roboto my-6">
            <p className="text-2xl font-semibold">Michael Heckerman</p>
            <p>Stockton, CA</p>
            <p>
              <a className="underline" href="tel:2096451561">
                (209)645-1561
              </a>
            </p>
            <p>mkheck13@gmail.com</p>
          </div>
          <div className="space-y-2 roboto my-6">
            <a
              href="https://github.com/mkheck13"
              target="_blank"
              className="flex space-x-2 hover:cursor-pointer"
            >
              <Image
                src={gitLogo}
                className="mr-2 w-14 lg:w-16 h-auto"
                alt="github Logo"
              />

              <p className="my-auto text-lg">Github</p>
            </a>
            <a
              href="https://www.linkedin.com/in/mike-heckerman-08867a306/"
              target="_blank"
              className="flex space-x-2 hover:cursor-pointer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                className="mr-2 w-14 lg:w-16 h-auto"
              />

              <p className="my-auto text-lg">LinkedIn</p>
            </a>

          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
