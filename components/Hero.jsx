import Link from "next/link";
import React from "react";
// import styles from './Hero.module.css'
const Hero = () => {
  return (
    <>
      <h1
        className="fluid-type leading-[1.1em] @[768px]/body:text-[4cqi] min-[767px]:max-[1150px]:mb-4"
        style={{
          gridColumn: "1/2",
          gridRow: "2/3",
          zIndex: "1",
          // fontSize: "3rem",
        }}
      >
        Explore your gateway to the perfect stay
      </h1>
      <div style={{ gridColumn: "1/2", gridRow: "3/4", zIndex: "1" }}>
        <p
          className="fluid-type text-balance [--fluid-type-min-size:0.5] [--fluid-type-max-size:1] md:self-start lg:max-xl:self-center "
          // style={{ gridColumn: "1/2", gridRow: "3/4", zIndex: "1" }}
        >
          Turn your getaway with Vacastay Culture into a lot more fun and
          excitement with ease.
        </p>
        <div className=" max-md:hidden flex gap-5 ">
          <Link href="https://play.google.com/store/apps/details?id=com.qb.vacastay">
            <img src="https://dge74qcdvkym8.cloudfront.net/assets/appstore-icon.png"></img>
          </Link>
          <Link href="https://apps.apple.com/us/app/vacastay-culture/id6670784760">
            <img src="https://dge74qcdvkym8.cloudfront.net/assets/playstore-icon.png"></img>
          </Link>
        </div>
      </div>
      <div
        className=" "
        style={{ gridColumn: "2/3", gridRow: "2/4", zIndex: "1" }}
      >
        {" "}
        <img
          className="phone-imag h-[40rem] max-[1023px]:place-self-center place-self-end "
          src="https://dge74qcdvkym8.cloudfront.net/assets/phone-image-with-preview.png"
          alt="phone with preview of the vacastay applicaton"
        ></img>
      </div>
    </>
  );
};

export default Hero;
