import logo from "@/assets/logosaas.png";
import Image from "next/image";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-2 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
        <Image src={logo} alt="sass logo" height={40} className="relative"/>
        </div>
        <nav className="flex flex-col md:flex-row justify-center gap-6 text-white/60 items-center mt-6">
          <Link href="#">About</Link>
          <Link href="#">Features</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Updates</Link>
          <Link href="#">help</Link>
        </nav>
        <div className="flex gap-6 justify-center mt-6">
          <span>fa</span>
          <span>X</span>
          <span>ins</span>
          <span>pin</span>
          <span>utube</span>
        </div>
        <p className="mt-6">&copy; 2024 Formio, Inc. All right reserved.</p>
      </div>
    </footer>
  );
};
