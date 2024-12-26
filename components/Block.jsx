import React from "react";
import styles from "./Block.module.css";

const Block = ({ backgroundImage, content, title }) => {
  return (
    <div
      className="block max-md:max-h-[75vh] max-md:aspect-[3/4] max-md:w-full "
      style={{ backgroundImage: `url(${backgroundImage})`, zIndex: "1" }}
    >
      <div className="inblock  p-7  text-blue-400 bg-white ">
        <h2 className="font-bold text-[clamp(20px,2cqi,28px)]">{title} </h2>
        <p className=" text-[clamp(14px,1.8cqi,1.5rem)] sm:line-clamp-2 ">
          {content}{" "}
        </p>
      </div>
    </div>
  );
};

export default Block;
