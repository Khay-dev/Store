import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
    const catergories = [
        {
            productName: "Shirts",
            productImage: "/assets/shirt.png",
            index: crypto.randomUUID(),
        },
        {
            productName: "Denim",
            productImage: "/assets/denim.png",
            index: crypto.randomUUID(),
        },
        {
            productName: "Tees",
            productImage: "/assets/tees.png",
            index: crypto.randomUUID(),
        },
        {
            productName: "Pants",
            productImage: "/assets/pants.png",
            index: crypto.randomUUID(),
        },
        {
            productName: "Sweaters",
            productImage: "/assets/sweater.png",
            index: crypto.randomUUID(),
        },
        {
            productName: "Outerwears",
            productImage: "/assets/outerwear.png",
            index: crypto.randomUUID(),
        },
    ];
    return (
        <main className="overflow-x-hidden scroll-smooth">
            <Navbar />
            <section className="h-[80vh] bg-top bg-cover bg-bg-hero bg-no-repeat w-full lg:h-screen">
                <div className="flex flex-col gap-y-3.5 w-full top-[50%] items-center gap-3 text-white absolute md:top-[40%] lg:top-[55%] md:left-[4%]  z-20 md:w-[40%] ">
                    <h3 className="font-normal text-3xl md:text-5xl font-Inter">
                        Your Cozy Era
                    </h3>
                    <p className="font-normal text-lg md:text-2xl text-center">
                        Get peak comfy-chic <br /> with new winter essentials.
                    </p>
                    <button
                        type="button"
                        className="uppercase w-[40%] font-normal text-sm text-text bg-white py-2 md:py-3"
                    >
                        shop now
                    </button>
                </div>
            </section>
            <section className=" lg:px-10 px-7 py-14">
                <h1 className="text-center font-normal text-2xl">
                    Shop by Category
                </h1>
                <div className=" scroll flex overflow-x-scroll snap-mandatory snap-x no-scrollbar gap-x-2 mt-5">
                    {catergories.map((category, index) => (
                        <div
                            className="flex flex-col shrink-0 items-center justify-center gap-y-3"
                            key={category.index}
                        >
                            <Image
                                src={category.productImage}
                                alt="shirt"
                                width={230}
                                height={263}
                            />
                            <Link
                                href=""
                                className="uppercase underline font-normal text-sm lg:text-sm "
                            >
                                {category.productName}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <section className=" lg:px-10 px-7 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
                    <div className=" bg-new bg-center bg-cover bg-no-repeat h-[500px] w-full flex flex-col gap-y-3.5 items-center justify-center">
                        <h1 className="font-normal text-2xl text-white">
                            New Arrivals
                        </h1>
                        <button className="uppercase w-[60%] font-normal text-sm text-text bg-white py-2 md:py-3">
                            Shop the latest .
                        </button>
                    </div>
                    <div className=" bg-best bg-center bg-cover bg-no-repeat h-[500px] w-full flex flex-col gap-y-3.5 items-center justify-center">
                        <h1 className="font-normal text-2xl text-white">
                            Best Sellers
                        </h1>
                        <button className="uppercase w-[60%] font-normal text-sm text-text bg-white py-2 md:py-3">
                            Shop the favourite.
                        </button>
                    </div>
                    <div className=" bg-holiday bg-center bg-cover bg-no-repeat h-[500px] w-full flex flex-col gap-y-3.5 items-center justify-center">
                        {" "}
                        <h1 className="font-normal text-2xl text-white">
                            Sale
                        </h1>
                        <button className="uppercase w-[60%]  font-normal text-sm text-text bg-white py-2 md:py-3">
                            Shop the occasion
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
