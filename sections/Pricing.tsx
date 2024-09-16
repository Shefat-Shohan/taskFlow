"use client";
import { pricingTiers } from "@/data";
import { cn } from "@/utils/cn";
import { CheckIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

export const Pricing = () => {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <p className="tag">Boost your productivity</p>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((item) => (
            <div
              key={item.title}
              className={cn(
                `card`,
                item.inverse === true && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3
                  className={cn(
                    `text-lg font-bold text-black/50`,
                    item.inverse === true && "text-white"
                  )}
                >
                  {item.title}
                </h3>
                {item.popular === true && (
                  <p className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                    animate={{
                      backgroundPositionX:"-100%"
                    }}
                    transition={{
                      duration:1,
                      repeat: Infinity,
                      ease: 'linear',
                      repeatType:'loop'
                    }}
                    className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium">
                      Popular
                    </motion.span>
                  </p>
                )}
              </div>
              <div className="mt-[30px]">
                <p className="text-4xl font-bold tracking-tighter leading-none">
                  ${item.monthlyPrice}
                  <span className="tracking-tight font-bold text-black/50 text-base">
                    /monthly
                  </span>
                </p>
              </div>
              <button
                className={cn(
                  `btn btn-primary w-full mt-[30px]`,
                  item.inverse === true && "bg-white text-black"
                )}
              >
                {item.buttonText}
              </button>
              <ul className="flex flex-col gap-4 mt-[32px]">
                {item.features.map((features) => (
                  <li
                    key={features}
                    className="flex items-center gap-4 text-sm"
                  >
                    <span>
                      <CheckIcon className="h-6 w-6" />
                    </span>
                    {features}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
