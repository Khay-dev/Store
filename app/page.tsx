import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

 const Products = () => {
    const products = [
        {
            productName: "The Waffle Long-Sleeve Crew",
            productImage: "/assets/fav1.png",
            productType: "Bone",
            price: "$60",
            index: crypto.randomUUID(),
        },
        {
            productName: "The Slim Stretch Jean",
            productImage: "/assets/fav2.png",
            productType: "Dark Indigo",
            price: "$148",
            index: crypto.randomUUID(),
        },
        {
            productName: "The Bomber Jacket  ",
            productImage: "/assets/fav3.png",
            productType: "Toasted Coconut",
            price: "$98",
            index: crypto.randomUUID(),
        },
        {
            productName: " The Essential Organic Crew",
            productImage: "/assets/fav4.png",
            productType: "Suade Blue",
            price: "$30",
            index: crypto.randomUUID(),
        },
        {
            productName: "The Essential  Crew",
            productImage: "/assets/fav1.png",
            productType: "Packet White",
            price: "$80",
            index: crypto.randomUUID(),
        },
        {
            productName: "The Cashmere Crew",
            productImage: "/assets/fav2.png",
            productType: "Vintage Pink",
            price: "$70",
            index: crypto.randomUUID(),
        },
    ];
    return (
        <div className="scroll flex overflow-x-scroll snap-mandatory snap-x no-scrollbar gap-x-2 mt-4 lg:mt-8">
            {products.map((product, index) => (
                <div
                    className="flex flex-col shrink-0 items-center justify-center gap-y-3"
                    key={product.index}
                >
                    <Image
                        src={product.productImage}
                        alt="shirt"
                        width={280}
                        height={420}
                    />
                    <div className="w-full flex justify-between p-1">
                        <div className="flex flex-col gap-y-1">
                            <p className="text-xs font-normal font-inter text-[#262626]">
                                {product.productName}
                            </p>
                            <p className="text-xs font-normal font-inter text-[#737373]">
                                {product.productType}
                            </p>
                        </div>
                        <p className="text-xs font-normal text-text">
                            {product.price}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

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
            <section className="h-[80vh] bg-top bg-cover bg-hero bg-no-repeat w-full lg:h-screen">
                <div className="flex flex-col gap-y-3.5 w-full top-[50%] items-center gap-3 text-white absolute md:top-[40%] lg:top-[55%] md:left-[4%]  z-20 md:w-[40%] ">
                    <h3 className="font-normal text-3xl md:text-4xl lg:text-5xl font-Inter">
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
                            The Holiday Outfit
                        </h1>
                        <button className="uppercase w-[60%]  font-normal text-sm text-text bg-white py-2 md:py-3">
                            Shop the occasion
                        </button>
                    </div>
                </div>
            </section>
            <section className="  relative flex flex-col justify-center items-center text-center h-auto lg:h-[40vh] px-5 py-9 bg-section bg-center bg-cover bg-no-repeat">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
                <div className="relative z-10">
                    <h2 className="text-white text-2xl lg:text-3xl font-normal font-inter">
                        We’re on a Mission To Clean Up the Industry
                    </h2>
                    <p className="text-white text-sm lg:text-base font-normal font-inter mt-3">
                        Read about our progress in our latest Impact Report.
                    </p>
                    <Link href="">
                        <button className="font-inter mx-auto mt-3 font-normal text-sm text-text bg-white py-2 w-[40%] uppercase       md:py-3">
                            learn more
                        </button>
                    </Link>
                </div>
            </section>
            <section className=" lg:px-10 px-7 py-14">
                <div className="text-center flex flex-col items-center gap-y-3 font-inter">
                    <h1 className="text-xl font-normal lg:mb-2 text-text lg:text-2xl">
                        Everlane Favourite
                    </h1>
                    <p className=" font-normal text-sm  text-text lg:text-base">
                        Beautifully Functional. Purposefully Designed.
                        Consciously Crafted.
                    </p>
                </div>
                <Products />
            </section>
        </main>
    );
}
