"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {

    ScrollTrigger.matchMedia({
      "(min-width: 601px)": function () {
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
        gsap.from(".ft1", {
          x: -600,
          scrollTrigger: {
            trigger: ".ft1",
            start: "-300% center",
            end: "200% center",
            scrub: 1,
          },
        });
        gsap.from(".ft2", {
          x: 600,
          scrollTrigger: {
            trigger: ".ft1",
            start: "-300% center",
            end: "200% center",
            scrub: 1,
          },
        });
      },

      "(max-width: 600px)": function () {
        gsap.from(".brand span", {
          y: "-50%",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".brand",
            start: "-80% 90%",
            end: "-80% 75%",
            scrub: 1,
          },
        });

        gsap.from(".ft1", {
          x: -200,
          scrollTrigger: {
            trigger: ".ft1",
            start: "-80% 90%",
            end: "-80% 75%",
            scrub: 1,
          },
        });

        gsap.from(".ft2", {
          x: 200,
          scrollTrigger: {
            trigger: ".ft1",
            start: "-80% 90%",
            end: "-80% 75%",
            scrub: 1,
          },
        });
      },

    })
    
     return () => {
       ScrollTrigger.clearMatchMedia();
     };

  }, []);

  return (
    <div className="h-screen w-full flex flex-col max-sm:overflow-hidden max-sm:h-[240px] ">
      <div className="h-full max-sm:h-1/2 w-full flex flex-col justify-evenly">
        <div className="ft1">
          <h1 className="font-semibold text-4xl nFont pl-32 max-sm:text-xl max-sm:pl-0 max-sm:text-center">
            Let&apos;s Empower Growth
          </h1>
        </div>
        <div className="ft2 flex flex-col items-end pr-44 max-sm:pr-0 max-sm:items-center max-sm:text-center">
          <div>
            <h1 className="font-semibold text-4xl nFont max-sm:text-xl">
              Connect With Us
            </h1>
            <h1 className="font-semibold text-2xl">
              <a
                href="mailto:vendalyn.web@gmail.com"
                className="hover:underline max-sm:text-xl"
              >
                vendalyn.web@gmail.com
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className="brand max-sm:h-1/2 h-full w-ful flex justify-center items-center text-[270px] font-semibold overflow-hidden hFont max-sm:text-7xl">
        <span className="flex items-center h-[324px]">V</span>
        <span className="flex items-center h-[324px]">E</span>
        <span className="text-[350px] pb-[44px] h-[324px] flex items-center max-sm:text-8xl max-sm:pb-4">
          n
        </span>
        <span className="flex items-center h-[324px]">D</span>
        <span className="flex items-center h-[324px]">A</span>
        <span className="flex items-center h-[324px]">L</span>
        <span className="flex items-center h-[324px]">Y</span>
        <span className="text-[350px] pb-[44px] h-[324px] flex items-center max-sm:text-8xl max-sm:pb-4">
          n
        </span>
      </div>
    </div>
  );
};

export default Footer;
