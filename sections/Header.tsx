"use client";
import Logo from "@/assets/logosaas.png";
import { navbar } from "@/data";
import {
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const isHome = pathname === "/";
  const [isOpen, setisOpen] = useState(false);
  const handleClick = () => {
    setisOpen(false);
  };
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {isHome && (
        <div className="flex justify-center gap-2 items-center py-3 bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] text-black text-sm">
          <p className=" hidden md:block">
            Streamline your workflow and boost you productivity |
          </p>
          <div className="inline-flex gap-1 items-center cursor-pointer font-semibold">
            <p>Get Stated for free</p>
            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </div>
      )}
      <div className="py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex w-full md:w-auto items-center justify-between">
              <Link href="/">
                <Image src={Logo} alt="Formio logo" width={40} height={40} />
              </Link>
              <span onClick={() => setisOpen(!isOpen)}>
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6 md:hidden" />
                ) : (
                  <Bars3Icon className="h-6 w-6 md:hidden" />
                )}
              </span>
            </div>
            <div
              className={`absolute border-t md:border-none top-28 left-0 w-screen bg-[#EAEEFE] shadow-sm md:shadow-none p-6 md:static md:w-auto md:bg-transparent ${
                isOpen ? "block" : "hidden"
              } md:block`}
            >
              <nav className="flex flex-col md:flex md:flex-row gap-6 text-black/80  items-center font-medium">
                {navbar.map((nav) => (
                  <div key={nav.id} onClick={handleClick}>
                    <Link href={nav.link}>{nav.title}</Link>
                  </div>
                ))}
                <Link href="#">
                  <button onClick={handleClick} className="btn btn-primary">
                    Get for free
                  </button>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
