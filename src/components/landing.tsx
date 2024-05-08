import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
// import React from "react";
import styles from "../styles/modules/_landing.module.scss";

export default function Landing() {
  const knot = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 1.75 });
      const movements = [-100, 300, 150, -300, -90, 100, -200];
      // gsap code here...
      console.log("working");
      gsap.set("h1", {
        y: 100,
      });
      gsap.set(".counter p", {
        y: 35,
      });
      tl.to("h1", {
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      });
      tl.to(
        ".counter p",
        {
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.5"
      );
      tl.to(".counter p", {
        y: -35,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.5,
      });
      tl.to(".counter p", {
        y: -70,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.5,
      });

      tl.to(".counter p", {
        y: -105,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.5,
      });
      tl.from(
        ".tagline",
        {
          y: 40,
          opacity: 0,
        },
        "-=4"
      );
      tl.to("h1", {
        fontSize: "15vw",
        duration: 1,
        ease: "power3.out",
      });
      tl.to(
        ".headeritem",
        {
          clipPath: "none",
          duration: 0.1,
        },
        "<"
      );
      tl.to(
        ".block",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.5,
          stagger: {
            amount: 0.5,
            from: "random",
            ease: "power3.out",
          },
        },
        "<"
      );
      movements.forEach((move, index) => {
        tl.to(`.h${index + 1}`, {
          y: move,
          duration: 1,
          ease: "power3.out",
        });
      });
      tl.from(".logo, link, footer p", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
      });
    },
    { scope: knot }
  ); // <-- scope is f
  return (
    <div ref={knot} className={styles.container}>
      <nav>
        <div className={styles.logo}>
          <a href="#">FPKPXTF</a>
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <a href="#">Contact Us</a>
          </div>
          <div className={styles.link}>
            <a href="#">Menu</a>
          </div>
        </div>
      </nav>
      <footer>
        <p>&copy; 2024</p>
        <p>Scroll to explore</p>
      </footer>
      <div className={styles.herovideo}>
        <video autoPlay loop muted>
          <source
            type="video/mp4"
            src="https://videos.pexels.com/video-files/19757074/19757074-uhd_3840_2160_30fps.mp4"
          />
        </video>
      </div>
      <div className={styles.blocks}>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
      <div className={styles.header}>
        <div className={styles.headeritem}>
          <div className={[styles.headeritemwrapper, styles.h1].join(" ")}>
            <h1>F</h1>
          </div>
        </div>
        <div className={styles.headeritem}>
          <div className={[styles.headeritemwrapper, styles.h2].join(" ")}>
            <h1>P</h1>
          </div>
        </div>
        <div className={styles.headeritem}>
          <div className={[styles.headeritemwrapper, styles.h3].join(" ")}>
            <h1>K</h1>
          </div>
        </div>
        <div className={styles.headeritem}>
          <div className={[styles.headeritemwrapper, styles.h4].join(" ")}>
            <h1>P</h1>
          </div>
        </div>
        <div className={styles.headeritem}>
          <div className={[styles.headeritemwrapper, styles.h5].join(" ")}>
            <h1>X</h1>
          </div>
        </div>
        <div className={styles.headeritem}>
          <div className={[styles.headeritemwrapper, styles.h6].join(" ")}>
            <h1>T</h1>
          </div>
        </div>
        <div className={styles.headeritem}>
          <div className={[styles.headeritemwrapper, styles.h7].join(" ")}>
            <h1>F</h1>
          </div>
        </div>
      </div>
      <div className={styles.counter}>
        <p>
          3 <br />
          2 <br />1
        </p>
      </div>
      <div className={styles.tagline}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          quisquam voluptas praesentium laboriosam numquam dolorum est laborum
          mollitia voluptatem consequuntur. Laudantium aliquid repudiandae
          perspiciatis itaque quidem nemo numquam in molestiae!
        </p>
      </div>
    </div>
  );
}
