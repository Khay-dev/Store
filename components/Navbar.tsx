"use client";
import Link from "next/link";
import Image from "next/image";

import flag from "../public/assets/us 1.svg";
import arrow from "../public/assets/ArrowRight.svg";

import { IoSearchSharp } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

export const Header = () => {
    return (
        <div className="flex items-center justify-between flex-col text-center  gap-y-2 md:flex-row bg-black text-white h-auto px-8 py-2 w-full">
            <div />
            <div>
                <p className="flex items-center text-xs font-semibold gap-y-2 md:gap-x-1.5 tracking-wide flex-col md:flex-row ">
                    Get early access on launches and offers.
                    <Link
                        href=""
                        className="flex items-center text-xs font-semibold"
                    >
                        <span className="font-inter font-normal underline  ">
                            Sign Up For Texts
                        </span>
                        <Image src={arrow} alt="arrow" width={10} height={20} />
                    </Link>
                </p>
            </div>
            <div className="flex items-center gap-x-3">
                <Image src={flag} alt="US-flag" width={25} height={15} />
                <p className="text-xs font-normal tracking-wider">USD</p>
            </div>
        </div>
    );
};

export const Submenu = () => {
    return (
        <div className="lg:flex items-center justify-center gap-4 h-[9vh] border-b border-[#DDDBDC] px-12 bg-white hidden ">
            <ul className="flex items-center gap-x-4 h-[9vh]">
                <li className="font-normal text-xs flex items-center  border-b-2 border-transparent hover:border-b-2 hover:border-black h-full transition ease-in text-text  tracking-wide">
                    <Link href={""}>Holiday Gifting</Link>
                </li>
                <li className="font-normal text-xs flex items-center  border-b-2 border-transparent hover:border-b-2 hover:border-black h-full transition ease-in text-text tracking-wide ">
                    <Link href={""}>New Arrivals</Link>
                </li>{" "}
                <li className="font-normal text-xs flex items-center  border-b-2 border-transparent hover:border-b-2 hover:border-black h-full transition ease-in text-text  tracking-wide">
                    <Link href={""}>Best Sellers </Link>
                </li>{" "}
                <li className="font-normal text-xs flex items-center  border-b-2 border-transparent hover:border-b-2 hover:border-black h-full transition ease-in text-text tracking-wide ">
                    <Link href={""}>Clothing</Link>
                </li>{" "}
                <li className="font-normal text-xs flex items-center  border-b-2 border-transparent hover:border-b-2 hover:border-black h-full transition ease-in text-text ">
                    <Link href={""}>Top & Sweaters</Link>
                </li>{" "}
                <li className="font-normal text-xs flex items-center  border-b-2 border-transparent hover:border-b-2 hover:border-black h-full transition ease-in text-text tracking-wide ">
                    <Link href={""}>Pant & Jeans</Link>
                </li>{" "}
                <li className="font-normal text-xs flex items-center  border-b-2 border-transparent hover:border-b-2 hover:border-black h-full transition ease-in text-text tracking-wide ">
                    <Link href={""}>Outer Wears</Link>
                </li>{" "}
                <li className="font-normal text-xs flex items-center  border-b-2 border-transparent hover:border-b-2 hover:border-black h-full transition ease-in text-text  tracking-wide">
                    <Link href={""}>Shoes & Bags</Link>
                </li>{" "}
                <li className="font-normal text-xs flex items-center  border-b-2 border-transparent hover:border-b-2 hover:border-black h-full transition ease-in text-text tracking-wide ">
                    <Link href={""}>Sales</Link>
                </li>
            </ul>
        </div>
    );
};

const Navbar = () => {
    const [nav, setNav] = useState(false);
    function ShowNav() {
        setNav(true);
    }

    function CloseNav() {
        setNav(false);
    }
    return (
        <section className="w-screen font-inter">
            <Header />

            <div className="flex items-center justify-between gap-4 h-[9vh] border-b border-[#DDDBDC] px-3 bg-white lg:hidden">
                <button type="button" onClick={ShowNav}>
                    <CiMenuBurger className="text-text text-xl" />
                </button>

                <div className="ml-[9vw]">
                    <p className=" font-bold font-inter text-sm -tracking-widest text-text ">
                        K H A Y - C A R T
                    </p>
                </div>

                <div className="flex items-center gap-x-2">
                    <button type="button">
                        <IoSearchSharp className="text-text text-xl" />
                    </button>
                    <button type="button">
                        <LuUser2 className="text-text text-xl" />
                    </button>
                    <button type="button">
                        <IoCartOutline className="text-text text-xl" />
                    </button>
                </div>
            </div>
            <div />
            {nav && (
                <div className="absolute top-[10vh] bg-white w-full p-3">
                    <div className="flex flex-col gap-y-5">
                        <button type="button" onClick={CloseNav} className="pt-5">
                            <IoIosClose className="text-text text-3xl" />
                        </button>
                        <ul className="flex flex-col gap-y-5">
                            <li className="hover:underline text-text tracking-wide h-full font-medium text-sm flex items-center transition ease-in">
                                <Link href={""}>Women</Link>
                            </li>
                            <li className="hover:underline text-text tracking-wide h-full font-medium text-sm flex items-center transition ease-in">
                                <Link href={""}>Men</Link>
                            </li>
                            <li className="hover:underline text-text tracking-wide h-full font-medium text-sm flex items-center transition ease-in">
                                <Link href={""}>About</Link>
                            </li>
                            <li className="hover:underline text-text tracking-wide h-full font-medium text-sm flex items-center transition ease-in">
                                <Link href={""}>Everworld Stories</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            
            <div className="items-center justify-between gap-4 h-[9vh] border-b border-[#DDDBDC] px-12 bg-white hidden lg:flex">
                <ul className="flex items-center gap-x-4 h-[9vh]">
                    <li className="font-normal text-xs flex items-center  border-b-2 border-transparent hover:border-b-2 hover:border-black h-full transition ease-in text-text tracking-wide">
                        <Link href={""}>Women</Link>
                    </li>
                    <li className=" font-normal text-xs flex items-center  border-b-2 border-transparent hover:border-b-2 hover:border-black h-full transition ease-in text-text tracking-wide">
                        <Link href={""}>Men</Link>
                    </li>
                    <li className="font-normal text-xs flex items-center border-b-2 border-transparent hover:border-b-2 hover:border-black h-full transition ease-in  text-text tracking-wide">
                        <Link href={""}>About</Link>
                    </li>
                    <li className="font-normal text-xs flex items-center border-b-2 border-transparent hover:border-b-2 hover:border-black h-full transition ease-in text-text tracking-wide">
                        <Link href={""}>Everworld Stories</Link>
                    </li>
                </ul>

                <div className="ml-[-16vw]">
                    <p className=" font-bold font-inter text-sm -tracking-widest text-text ">
                        K H A Y - C A R T
                    </p>
                </div>

                <div className="flex items-center gap-x-4">
                    <button type="button">
                        <IoSearchSharp />
                    </button>
                    <button type="button">
                        <LuUser2 />
                    </button>
                    <button type="button">
                        <IoCartOutline />
                    </button>
                </div>
            </div>
            <div />
            <Submenu />
        </section>
    );
};

export default Navbar;
