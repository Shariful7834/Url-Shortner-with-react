import React from "react";
import illustration from "../../../assets/illustration-working.svg";
const Banner = () => {
  return (
    <div className="hero" style={{ backgroundColor: "white" }}>
      <div
        className="hero-content flex-col lg:flex-row-reverse justify-between"
        style={{ height: "600px" }}
      >
        <div>
          <img src={illustration} className="max-w-sm p-6 rounded-lg " alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-6xl font-bold">
            More than Just <br /> Shorter List
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="bg-info py-2 px-3 rounded-3xl mt-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
