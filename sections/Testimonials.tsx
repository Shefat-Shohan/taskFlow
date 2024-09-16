"use client";
import TestimonialsColumn from "@/components/TestimonialsColumn";
import { testimonials } from "@/data";
export const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);
  return (
    <section className="bg-white pb-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="tag">Testimonials</p>
        </div>
        <h2 className="section-title mt-5">What our users say</h2>
        <div className="flex mt-10 justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn props={firstColumn} duration={15}/>
          <TestimonialsColumn props={secondColumn} className="hidden md:block" duration={19}/>
          <TestimonialsColumn props={thirdColumn} className="hidden lg:block" duration={17}/>
        </div>
      </div>
    </section>
  );
};
