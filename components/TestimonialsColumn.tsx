"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
type Testimonials = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};

const TestimonialsColumn = ({
  props,
  className,
  duration
}: {
  props: Testimonials[];
  className?: string;
  duration?: number
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: 'loop',
        }}
        className={`flex flex-col gap-6 pb-6`}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.map((testimonials) => (
              <div key={testimonials.username} className="card">
                <h3 className=""> {testimonials.text} </h3>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={testimonials.imageSrc}
                    alt="user"
                    className=" rounded-full"
                    height={50}
                    width={50}
                  />
                  <div className="flex flex-col">
                    <span className="font-medium tracking-tight leading-[20px]">
                      {testimonials.name}
                    </span>
                    <span className="leading tracking-tight">
                      {testimonials.username}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;
