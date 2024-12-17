"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {

    gsap.from(".brand span", {
      y: "-60%",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".brand",
        start: "-75% 50%",
        end: "top 50%",
        scrub: 1,
      },
    });
    
    gsap.from(".ft", {
      opacity:0,
      y:-40,
      scrollTrigger: {
        trigger: ".ft",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });

  }, []);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <div className="ft h-1/2 w-full flex flex-col justify-evenly text-center nFont font-semibold">
        <h1 className="text-[2.12vw] max-sm:text-[3vmax]">
          Let&apos;s Empower Growth
        </h1>
        <div className="flex flex-col">
          <h1 className="text-[2.12vw] max-sm:text-[3vmax]">Connect With Us</h1>
          <a
            href="mailto:vendalyn.web@gmail.com"
            className="text-[1.41vw] max-sm:text-[3vmax] hover:underline"
          >
            vendalyn.web@gmail.com
          </a>
        </div>
      </div>
      <div className="brand h-1/2 w-full flex justify-center hFont text-[16vw] font-semibold overflow-hidden">
        <span className="flex items-center">V</span>
        <span className="flex items-center">E</span>
        <span className="flex items-center">N</span>
        <span className="flex items-center">D</span>
        <span className="flex items-center">A</span>
        <span className="flex items-center">L</span>
        <span className="flex items-center">Y</span>
        <span className="flex items-center">N</span>
      </div>
    </div>
  );
};

export default Footer;
