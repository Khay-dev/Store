import React from "react";
import Image from "next/image";
import Navbar from "../../components/ui/Navbar";
const About = () => {
    return (
        <main className="overflow-x-hidden scroll-smooth">
            <Navbar />
            <section className="h-[80vh] bg-bottom bg-cover bg-about bg-no-repeat w-full lg:h-screen ">
                <div className="flex flex-col gap-y-3.5 w-[90%] top-[50%] left-[6%] items-center gap-3 text-white absolute md:top-[40%] lg:top-[60%] md:left-[25%] lg:left-[30%]  z-20 lg:w-[40%]  md:w-[50%]">
                    <h3 className="font-normal text-3xl md:text-4xl lg:text-5xl font-Inter text-center">
                        We believe we can all make a difference.
                    </h3>
                    <p className="font-normal text-lg md:text-2xl text-center">
                        Our way: Exceptional quality. Ethical factories. Radical
                        Transparency.
                    </p>
                </div>
            </section>
            <section className=" lg:px-10 px-7 py-14 w-full grid place-items-center ">
                <p className=" text-2xl lg:text-3xl font-normal w-full lg:w-[60%] md:w-[70%] text-center">
                    At Everlane, we want the right choice to be as easy as
                    putting on a great T-shirt. That’s why we partner with the
                    best, ethical factories around the world. Source only the
                    finest materials. And share those stories with you down to
                    the true cost of every product we make. It’s a new way of
                    doing things. <br /> We call it Radical Transparency.
                </p>
            </section>
            <section className=" w-full h-fit flex flex-col md:flex-row lg:flex-row">
                <div className="w-full lg:w-2/4 mx-auto lg:h-auto md:h-[40vh]">
                    <Image
                        src={"/assets/fact.png"}
                        alt={"tailor"}
                        width={700}
                        height={733}
                    />
                </div>
                <div className="bg-[#e6ded8] w-full lg:w-[50%] mx-auto flex flex-col md:p-8 py-7 px-7 lg:p-20 items-start justify-center h-[350px] lg:h-auto md:h-[40vh]">
                    <span className="font-normal font-inter text-xs">
                        OUR FACTORIES
                    </span>
                    <h1 className="font-normal font-inter text-3xl md:text-3xl lg:text-4xl">
                        Our ethical approach.
                    </h1>
                    <p className="mt-5 font-normal font-inter text-sm">
                        We spend months finding the best factories around the
                        world—the same ones that produce your favorite designer
                        labels. We visit them often and build strong personal
                        relationships with the owners. Each factory is given a
                        compliance audit to evaluate factors like fair wages,
                        reasonable hours, and environment. Our goal? A score of
                        90 or above for every factory.
                    </p>
                </div>
            </section>
            {/* <section className="bg-about h-[60vh] bg-top bg-cover  bg-no-repeat w-full " />
            <section>yooooo</section> */}
        </main>
    );
};

export default About;
