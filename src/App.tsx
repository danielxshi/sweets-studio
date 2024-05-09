import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./App.scss";
import { useGSAP } from "@gsap/react";
import Landing from "./components/loading";
import Button from "./components/Header/Button/button";
import Header from "./components/Header";

function App() {
  const [isActive, setIsActive] = useState(false);

  // const contain = useRef<HTMLDivElement>(null);
  // const previewBg = useRef<HTMLDivElement>(null);
  // const items = useRef<HTMLDivElement>(null);
  // const activePreview = useRef<HTMLDivElement>(null);
  // const [mouse, setMouse] = useState(false);

  // const defaultClipPaths = {
  //   "variant-1": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  //   "variant-2": "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  //   "variant-3": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
  // };

  // const variantTransform = {
  //   "variant-1": {
  //     title: { x: 75, opacity: 0 },
  //     tags: { y: -75, opacity: 0 },
  //     description: { y: 75, opacity: 0 },
  //   },
  //   "variant-2": {
  //     title: { x: -75, opacity: 0 },
  //     tags: { y: -75, opacity: 0 },
  //     description: { y: 75, opacity: 0 },
  //   },
  //   "variant-3": {
  //     title: { x: 75, opacity: 0 },
  //     tags: { y: 75, opacity: 0 },
  //     description: { x: 75, opacity: 0 },
  //   },
  // };

  // function getDefaultClipPath(previewElement: any){
  //   for (const variant in defaultClipPaths){
  //     if (previewElement.classList.contains(variant)) {
  //       return defaultClipPaths(variant);
  //     }
  //     return "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)";
  //   }
  // }

  // function applyVariantStyles(previewElement: { className: string; }) {
  //   const variant = previewElement.className.split(" ")
  //   .find((className) => className.startsWith("variant-1"));
  //   if (variant && variantTransform[variant]) {
  //     Object.entires(variantTransforms[variant]).forEach(
  //       ([elementClass, transform])
  //     )
  //   }
  // }

  function splitTextIntoSpans(selector: any) {
    let elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      let text = element.innerText;
      let splitText = text
        .split("")
        .map(function (char: string) {
          return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
        })
        .join("");
      element.innerHTML = splitText;
    });
  }

  useGSAP(() => {
    gsap.to(".slide-next-img", {
      delay: 5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.5,
      ease: "power3.out",
    });
    splitTextIntoSpans(".slider-content-active h1");
    gsap.to(".slider-content-active h1 span", {
      delay: 5.5,
      duration: 1,
      stagger: 0.05,
      top: "0",
      ease: "power3.out",
    });
    gsap.to(".slide-active img", {
      delay: 5.5,
      scale: 2,
      duration: 2,
      ease: "power3.out",
    });
  });

  // const mapClasses = [
  //   "variant-1",
  //   "variant-2",
  //   "variant-3",
  //   "variant-1",
  //   "variant-2",
  //   "variant-3",
  // ];

  // const preview = [
  //   {
  //     img: "/images/1.jpg",
  //     title: "Ab",
  //     tags: "Futuristic Fashion, Minimal Design",
  //     description:
  //       "Exploring the intersection of minimalism and future fashion trends in web design",
  //   },
  //   {
  //     img: "/images/2.jpg",
  //     title: "Ab",
  //     tags: "Futuristic Fashion, Minimal Design",
  //     description:
  //       "Exploring the intersection of minimalism and future fashion trends in web design",
  //   },
  //   {
  //     img: "/images/3.jpg",
  //     title: "Ab",
  //     tags: "Futuristic Fashion, Minimal Design",
  //     description:
  //       "Exploring the intersection of minimalism and future fashion trends in web design",
  //   },
  //   {
  //     img: "/images/4.jpg",
  //     title: "Ab",
  //     tags: "Futuristic Fashion, Minimal Design",
  //     description:
  //       "Exploring the intersection of minimalism and future fashion trends in web design",
  //   },
  // ];

  return (
    <div className="container relative mt-4 mr-8 flex w-9/12 h-4/5">
      <Landing />
      <div className="hamburger"></div>
      <nav>
        <div className="logo">
          <a href="#"> Echo Node</a>
        </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Info</a>
          <a href="#">Contact</a>
        </div>
        <div className="shop">
          <Header />
        </div>
      </nav>
      <div className="contain">
        <nav></nav>

        <div className="items">
          <div className="item">
            <p>Item Name</p>
          </div>
          <div className="item">
            <p>Item Name</p>
          </div>
          <div className="item">
            <p>Item Name</p>
          </div>
          <div className="item">
            <p>Item Name</p>
          </div>
          <div className="item">
            <p>Item Name</p>
          </div>
        </div>

        <div className="preview-bg">
          <img src="/images/7.jpg" alt="" />
        </div>
      </div>

      {/* <div className="copy">
        <p>Lifestyle Catalogue</p>
        <p>2024 / 2025</p>
      </div> */}
      <footer>
        <p>Launching Soon</p>
      </footer>
      <div className="slider">
        {/* <div className="slide-active">
          <img src="/images/3.jpg" />
        </div> */}
        {/* <div className="slide-next">
          <div className="slide-next-img clip-path:polygon(50%_50%,50%_50%,50%_50%)] ">
            <img src="/images/6.jpg" alt="" />
          </div>
        </div> */}
        <div className="slider-content">
          <div className="slider-content-active project-title">
            <h1 className="">Title</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
