import React from "react";
import Image from "next/image";
import aboutImage from "../../public/assets/about.jpg";

const About = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-black via-gray-900 to-black ">
        <div className="mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Image Section */}
          <div className="lg:w-1/2 h-full">
            <Image
              src={aboutImage}
              alt="Dining Room image"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Text Section */}
          <div className="lg:w-2/5 bg-goldenBrown bg-opacity-30 text-white p-12 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold mb-6">OUR STORY</h3>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              Zafran is a vibrant Afghan restaurant that brings the rich flavors
              and traditions of Afghanistan to your table. Named after saffron,
              a prized ingredient in Afghan cuisine, Zafran offers an authentic
              dining experience that celebrates the heritage of Afghan
              hospitality.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
