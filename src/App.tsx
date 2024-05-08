import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./App.scss";
import { useGSAP } from "@gsap/react";
import Landing from "./components/loading";

function App() {
  // function splitTextIntoSpans(selector: any) {
  //   let elements = document.querySelectorAll(selector);
  //   elements.forEach((element) => {
  //     let text = element.innerText;
  //     let splitText = text
  //       .split("")
  //       .map(function (char: string) {
  //         return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
  //       })
  //       .join("");
  //     element.innerHTML = splitText;
  //   });
  // }

  // useGSAP(() => {
  //   gsap.to(".slide-next-img", {
  //     delay: 5,
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //     duration: 1.5,
  //     ease: "power3.out",
  //   });
  //   splitTextIntoSpans(".slider-content-active h1");
  //   gsap.to(".slider-content-active h1 span", {
  //     delay: 5.5,
  //     duration: 1,
  //     stagger: 0.05,
  //     top: "0",
  //     ease: "power3.out",
  //   });
  //   gsap.to(".slide-active img", {
  //     delay: 5.5,
  //     scale: 2,
  //     duration: 2,
  //     ease: "power3.out",
  //   });
  // });

  return (
    <div>
      <Landing />
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
          <a href="#">Search</a>
          <a href="#">Account</a>
          <a href="#">Cart</a>
        </div>
      </nav>
      <div className="container">
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
          <img src="/images/1.jpg" alt="" />
        </div>
      </div>
      {/* <div className="copy">
        <p>Lifestyle Catalogue</p>
        <p>2024 / 2025</p>
      </div> */}
      {/* <footer>
        <p>Launching Soon</p>
      </footer> */}
      {/* <div className="slider">
        <div className="slide-active">
          <img src="/images/3.jpg" />
        </div>
        <div className="slide-next">
          <div className="slide-next-img clip-path:polygon(50%_50%,50%_50%,50%_50%)] ">
            <img src="/images/6.jpg" alt="" />
          </div>
        </div>
        <div className="slider-content">
          <div className="slider-content-active project-title">
            <h1 className="">Title</h1>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
