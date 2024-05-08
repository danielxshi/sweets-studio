import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import "./App.scss";
import test from "../public/images/1.jpg";
import Landing from "./components/landing";

function App() {
  let currentImageIndex = 2;
  let currentContentIndex = 1;

  const sliderContent = [
    "Luminapad",
    "PulseEar",
    "ZenithWatch",
    "AeroCharge",
    "NimbusCam",
    "EclipseDrive",
    "TerraHub",
    "QuantumKey",
    "MeshRouter",
    "AuraBearm",
  ];

  const totalImages = 10;
  const container = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.addEventListener("click", swag);

    return () => {
      window.removeEventListener("click", swag);
    };
  }, []);

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

  function swag() {
    if (animate) return true;
    setAnimate(true);

    splitTextIntoSpans(".slider-content-active h1");
    gsap.to(".slide-active img", {
      scale: 2,
      duration: 2,
      ease: "power3.out",
    });
    gsap.to(".slider-content-active h1 span", {
      top: "-175px",
      stagger: 0.05,
      ease: "power3.out",
    });

    splitTextIntoSpans(".slider-content-next h1");
    gsap.set(".slider-content-next h1 span", {
      top: "200px",
    });
    gsap.to(".slider-content-next", {
      top: 0,
      duration: 1.125,
      ease: "power3.out",
      onComplete: () => {
        setClicked(true);
        gsap.to(".slider-content-next h1 span", {
          top: 0,
          stagger: 0.05,
          ease: "power3.out",
          duration: 0.5,
        });
      },
    });

    const nextContent = document.querySelector(".slider-content-next");

    currentContentIndex = (currentContentIndex + 1) % totalImages;
    const nextContentText = sliderContent[currentContentIndex];
    const newContentHTML = `<div className="slider-content-next style="top: 200px;"><h1>${nextContentText}</h1></div>`;

    const sliderContentDiv = document.querySelector(".slider.content");
    if (sliderContentDiv) {
      sliderContentDiv.insertAdjacentHTML("beforeend", newContentHTML);
    }

    currentImageIndex = (currentImageIndex % totalImages) + 1;

    const newSlideHTML = `
      <div className="slide-next">
        <div className="slide-next-img">
          <img src="../public/images/${currentImageIndex}.jpg" alt="" />
        </div>
      </div>
    `;

    const sliderDiv = document.querySelector(".slider");
    if (sliderDiv) {
      sliderDiv.insertAdjacentHTML("beforeend", newSlideHTML);
    }

    gsap.to(".slide-next-img", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5,
    });

    const slideNextImg = document.querySelector(".slide-next-img");
    gsap.to(slideNextImg, {
      width: "100vw",
      height: "100vh",
      duration: 2,
      ease: "power3.out",
      onComplete: () => {
        const currentActiveSlide = document.querySelector(".slide-active");
        if (currentActiveSlide) {
          currentActiveSlide.parentNode?.removeChild(currentActiveSlide);
        }

        const nextSlide = document.querySelector(".slide-next");
        if (nextSlide) {
          nextSlide.classList.remove("slide-next");
          nextSlide.classList.add("slide-active");

          const nextSlideImg = nextSlide.querySelector(".slide-next-img");
          if (nextSlide) {
            nextSlideImg?.classList.remove("slide-next-img");
          }
        }
      },
    });

    // setTimeout(() => {
    //   isAnimating = false;
    // }, 500);
  }

  return (
    <div ref={container}>
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
      <div className="copy">
        <p>Lifestyle Catalogue</p>
        <p>2024 / 2025</p>
      </div>
      <footer>
        <p>Launching Soon</p>
      </footer>
      <div className="slider">
        <div className="slide-active">
          <img src="/images/1.jpg" />
        </div>
        <div className="slide-next">
          <div className="slide-next-img clip-path:polygon(50%_50%,50%_50%,50%_50%)] ">
            <img src="/images/2.jpg" alt="" />
          </div>
        </div>
        <div className="slider-content">
          <div className={clicked ? "" : "slider-content-active"}>
            <h1>{sliderContent[0]}</h1>
          </div>
          <div
            className={
              clicked ? "slider-content-active top-0" : "slider-content-next"
            }
          >
            <h1>{sliderContent[1]}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
