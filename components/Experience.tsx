"use client"
import React from "react";

import { workExperience } from "@/data/index";
import { Button } from "./ui/MovingBoarder";
import { link } from "fs";

const redirect = (link: string | URL | undefined) => {
  window.open(link, '_blank');
}

const Experience = () => {
  return (
    <div className="sm:pt-48 pt-24 w-full">
      <div className="flex justify-center" style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.5)'}}>
        <h1 className="flex flex-col justify-center items-center text-center heading sm:max-w-[60vw] max-w-[75vw]" >
          My&nbsp; <span className="text-yellow-100"> work experience</span>
        </h1>

      </div>
      

      <div className="sm:pt-24 pt-12 flex flex-wrap justify-center items-center w-[1000px] gap-10 sm:max-w-[60vw] max-w-[75vw] mx-auto">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            // random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              // add these two
              // you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "bg-black-100",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="h-[200px] flex-1 bg-grey-dark hover:bg-transparent text-black dark:text-white"
            onClick = {() =>redirect(card.link)}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;