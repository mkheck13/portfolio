"use client";

import { Tooltip } from "flowbite-react";
import React from "react";
import Image from "next/image";


export default function SkillsComponent() {
  return (
    <>

<div id="skills" className="grid grid-cols-4 gap-10 my-16 px-5 items-center ">
          <div className="col-span-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-railway font-medium text-teal-500">Libraries</p>
            <div className="flex flex-row gap-4 mt-5 items-center">
              <Tooltip content="React" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/react-librarys.png" width={50} height={50} alt="react" />
              </Tooltip>
              <Tooltip content="Unity" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/unity.png" width={50} height={50} alt="react" />
              </Tooltip>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-railway font-medium text-teal-500">Languages</p>
            <div className="flex flex-row gap-3 mt-5 items-center">
              <Tooltip content="JavaScript" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/js.png" width={45} height={43} alt="react" className="rounded-sm" />
              </Tooltip>
              <Tooltip content="HTML5" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/HTML.png" width={45} height={45} alt="react" />
              </Tooltip>
              <Tooltip content="CSS" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/CSS.png" width={45} height={45} alt="react" />
              </Tooltip>
              <Tooltip content="TypeScript" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/typescript.png" width={45} height={45} alt="react" />
              </Tooltip>
              <Tooltip content="C#" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/csharp.png" width={50} height={45} alt="react" />
              </Tooltip>
              <Tooltip content="SQL" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/sql.png" width={50} height={50} alt="react" />
              </Tooltip>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-railway font-medium text-teal-500">Frameworks</p>
            <div className="flex flex-row gap-4 mt-5 items-center">
              <Tooltip content="TailwindCSS" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/tailwind1.png" width={50} height={50} alt="react" />
              </Tooltip>
              <Tooltip content="Bootstrap" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/bootstrap.png" width={50} height={50} alt="react" />
              </Tooltip>
              <Tooltip content="Next.js" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/nextjs.png" width={47} height={50} alt="react" />
              </Tooltip>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-railway font-medium text-teal-500">Productivity</p>
            <div className="flex flex-row gap-3 mt-5 items-center">
              <Tooltip content="Visual Studio Code" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/vscode.png" width={47} height={47} alt="react" />
              </Tooltip>
              <Tooltip content="GitHub" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/github.png" width={47} height={47} alt="react" />
              </Tooltip>
              <Tooltip content="Slack" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/slack.png" width={50} height={50} alt="react" />
              </Tooltip>
              <Tooltip content="Azure" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/azure.png" width={47} height={47} alt="react" />
              </Tooltip>
              <Tooltip content="Jira" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/jira.png" width={50} height={50} alt="react" />
              </Tooltip>
              <Tooltip content="Figma" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/figma.png" width={34} height={50} alt="react" />
              </Tooltip>
              <Tooltip content="Notion" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/notion.png" width={45} height={50} alt="react" />
              </Tooltip>
            </div>
          </div>
        </div>


    
    </>
  );
}
