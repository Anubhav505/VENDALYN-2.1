"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    ScrollTrigger.matchMedia({
"(min-width: 601px)": function () {
    gsap.to(".heroVideo", {
      clipPath: "circle(0% at 50% 50%)",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 2,
      },
    });

    gsap.from(".heroBrand span", {
      delay: 0.5,
      opacity: 0,
      y: "50%",
      stagger: 0.08,
    });

    gsap.from(".heroTC", {
      scale: 10,
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".heroT",
        start: "bottom 50%",
        end: "bottom -20%",
        scrub: 1,
      },
    });
  },
    
      "(max-width: 600px)": function () {
        gsap.to(".heroVideo", {
          clipPath: "circle(0% at 50% 50%)",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            pin: true,
            scrub: 2,
          },
        });

        gsap.from(".heroBrand span", {
          delay: 0.5,
          opacity: 0,
          y: "50%",
          stagger: 0.08,
        });

        const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: ".heroBrand",
              start: "center 75%",
              end: "center 50%",
              scrub: 1,
            },
          })
          scrollTl.to(".heroBrand span", {
            opacity: 0,
            x: "0%",
          });

        gsap.from(".heroTC", {
          scale: 10,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".heroT",
            start: "bottom 50%",
            end: "bottom -20%",
            scrub: 1,
          },
        });
      },
    });

     return () => {
       ScrollTrigger.clearMatchMedia();
     };

  }, []);

  return (
    <div className="hero h-screen w-full flex flex-col relative overflow-hidden max-sm:h-screen max-sm:object-cover">
      <div
        style={{ clipPath: "circle(100% at 50% 50%)" }}
        className="heroVideo h-full w-full absolute z-40 max-sm:h-screen max-sm:object-cover"
      >
        <video
          className="max-sm:h-screen max-sm:object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/videos/brandVideo.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="heroT w-full h-[50vh] flex flex-col justify-center z-30">
          <div className="w-[70%] h-full font-bold px-[50px] flex flex-col justify-between py-16 max-sm:w-full">
            <div></div>
            <h2 className="text-[16px] heroTC nFont max-sm:text-center max-sm:mb-32">
              Custom Web Design Solutions Tailored to Your Needs.
            </h2>
            <div className="max-sm:flex max-sm:flex-col gap-16">
              <h1 className="text-[32px] heroTC nFont max-sm:text-center max-sm:leading-9">
                Elevate Your Online Presence with &nbsp;
                <span className="text-green-500 hFont">VENDALYN</span>
              </h1>
              <h2 className="text-[16px] font-semibold heroTC nFont max-sm:text-center">
                we create stunning, high-performing websites tailored to your
                specific needs. Whether you’re starting fresh or refreshing an
                existing site, our expert team delivers modern, user-friendly
                designs that drive results and make your brand stand out.
              </h2>
            </div>
          </div>
        </div>
        <div className="heroBrand h-[50vh] w-full flex justify-center items-end text-[270px] font-semibold overflow-hidden hFont z-50  max-sm:text-7xl">
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
    </div>
  );
};

export default Hero;
