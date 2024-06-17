import Link from "next/link";
import Image from "next/image";
import flag from "../public/assets/us 1.svg";
import arrow from "../public/assets/ArrowRight.svg";
import { IoSearchSharp } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";

export const Header = () => {
    return (
        <div className="flex items-center justify-between bg-black text-white h-auto px-8 py-2 w-full">
            <div />
            <div>
                <p className="flex items-center text-xs font-semibold gap-x-1.5 tracking-wide ">
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
        <div className="flex items-center justify-center gap-4 h-[9vh] border-b border-[#DDDBDC] px-12 bg-white ">
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
    return (
        <section className="w-screen font-inter">
            <Header />

            <div className="flex items-center justify-between gap-4 h-[9vh] border-b border-[#DDDBDC] px-12 bg-white">
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
