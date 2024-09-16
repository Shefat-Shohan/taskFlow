"use client";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip" id="about"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <p className="tag">Boost your productivity</p>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="productImage" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="pyramidImage"
            className="absolute -right-36 -top-32 hidden md:block"
            width={262}
            height={262}
            style={{
              translateY: translateY
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="tubeImage"
            height={248}
            width={248}
            className="absolute bottom-24 -left-36 hidden md:block"
            style={{
              translateY: translateY
            }}
          />
        </div>
      </div>
    </section>
  );
};
