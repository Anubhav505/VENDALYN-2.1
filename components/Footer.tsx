"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.from(".brand span", {
      y: "-75%",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".brand",
        start: "-75% 50%",
        end: "top 50%",
        scrub: 1,
      },
    });
    gsap.from(".ft1",{
      x:-600,
      scrollTrigger:{
        trigger:".ft1",
        start:"-300% center",
        end:"200% center",
        scrub:1,
      }
    })
    gsap.from(".ft2", {
      x: 600,
      scrollTrigger: {
        trigger: ".ft1",
        start: "-300% center",
        end: "200% center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="h-full w-full flex flex-col justify-evenly">
        <div className="ft1">
          <h1 className="text-white font-semibold text-4xl nFont pl-32">
            Let's Empower Growth
          </h1>
        </div>
        <div className="ft2 flex flex-col items-end pr-44">
          <div>
            <h1 className="font-semibold text-4xl nFont">
              Connect With Us
            </h1>
            <h1 className="font-semibold text-2xl">
              <a
                href="mailto:vendalyn.web@gmail.com"
                className="hover:underline"
              >
                vendalyn.web@gmail.com
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className="brand h-full w-ful flex justify-center items-center text-[270px] font-semibold overflow-hidden hFont">
        <span className="flex items-center h-[324px]">V</span>
        <span className="flex items-center h-[324px]">E</span>
        <span className="text-[350px] pb-[44px] h-[324px] flex items-center ">
          n
        </span>
        <span className="flex items-center h-[324px]">D</span>
        <span className="flex items-center h-[324px]">A</span>
        <span className="flex items-center h-[324px]">L</span>
        <span className="flex items-center h-[324px]">Y</span>
        <span className="text-[350px] pb-[44px] h-[324px] flex items-center">
          n
        </span>
      </div>
    </div>
  );
};

export default Footer;
