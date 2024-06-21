import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Image from "next/image";
import Link from "next/link";

interface Category {
    productName: string;
    productImage: string;
    index: string;
}

interface Products {
    productName: string;
    productImage: string;
    productType: string;
    price: string;
    index: string;
}

const Products:React.FC = () => {
    const products: Products[] = [
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

export default function Home(): JSX.Element {
    const catergories: Category[] = [
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
        {
            productName: "Casuals",
            productImage: "/assets/tees.png",
            index: crypto.randomUUID(),
        },
    ];
    return (
        <main className="overflow-x-hidden scroll-smooth">
            <Navbar />
            <section className="h-[80vh] bg-top bg-cover bg-hero bg-no-repeat w-full lg:h-screen">
                <div className="flex flex-col gap-y-3.5 w-full top-[50%] items-center gap-3 text-white absolute md:top-[40%] lg:top-[55%] lg:left-[4%]  z-20 lg:w-[40%] ">
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
            <section className=" lg:px-10 px-7 lg:py-14  pb-14 pt-5">
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
                <div className="text-center flex flex-col items-center gap-y-4 font-inter">
                    <h1 className="font-normal lg:mb-2 text-text text-2xl">
                        Khay-Kart Favourite
                    </h1>
                    <p className=" font-normal text-sm  text-text lg:text-base">
                        Beautifully Functional. Purposefully Designed.
                        Consciously Crafted.
                    </p>
                </div>
                <Products />
            </section>
            <section className=" lg:px-0 px-7 lg:py-14  pb-14 pt-5 flex items-center justify-between w-full lg:w-[80%] mx-auto lg:gap-x-10 flex-col lg:flex-row ">
                <div className="flex flex-col items-start gap-y-4 w-11/12 mb-10 lg:mb-0">
                    <span className="font-normal font-inter text-base mb-3 text-black">
                        People Are Talking
                    </span>
                    <div className="lg:w-[401px] w-full">
                        <Image
                            src="/assets/star.svg"
                            alt="stars"
                            width={78}
                            height={14}
                        />
                        <h4 className="font-normal font-inter text-xl lg:text-2xl mt-4 text-left">
                            “Love this shirt! Fits perfectly and the fabric is
                            thick without being stiff.”
                        </h4>
                    </div>

                    <p className="font-normal text-sm font-inter mt-3">
                        <span>-- JonSnSF,</span>{" "}
                        <span className="underline tracking-wide">
                            The Heavyweight Overshirt
                        </span>
                    </p>
                </div>
                <div className=" flex items-center justify-center lg:w-full">
                    <Image
                        src={"/assets/review.png"}
                        alt={"model"}
                        width={530}
                        height={695}
                    />
                </div>
            </section>
            <section className="border-b-4 border-t-4 lg:px-0 px-7 lg:py-14 pb-14 pt-7 flex items-center justify-center  w-full lg:w-[85%] mx-auto gap-y-6 lg:gap-y-0 lg:gap-x-4 flex-col lg:flex-row  ">
                <div>
                    <p className="text-center font-inter font-normal text-2xl m-5">
                        Our Holiday Gift Picks
                    </p>
                    <Image
                        src={"/assets/gift.png"}
                        alt={"Gift"}
                        width={505}
                        height={626}
                        className="transition-grayscale duration-500 hover:grayscale"
                    />
                    <div className="flex flex-col justify-center items-center gap-y-2 mt-3">
                        <span className="font-normal font-inter text-center text-[#262626] text-sm">
                            The best presents for everyone on your list.
                        </span>
                        <Link
                            href=""
                            className="underline text-sm font-inter font-normal mt-3"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
                <div>
                    <p className="text-center font-inter font-normal text-2xl m-5">
                        Cleaner Fashion
                    </p>
                    <Image
                        src={"/assets/fashion.png"}
                        alt={"fashion"}
                        width={505}
                        height={626}
                        className="transition-grayscale duration-500 hover:grayscale"
                    />
                    <div className="flex flex-col justify-center items-center gap-y-2 mt-3">
                        <span className="font-normal font-inter text-center text-[#262626] text-sm">
                            See the sustainability efforts behind each of our
                            products.
                        </span>
                        <Link
                            href=""
                            className="underline text-sm font-inter font-normal mt-3"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
            <section className=" lg:px-10 px-7 py-14">
                <div className="text-center flex flex-col items-center gap-y-3 font-inter">
                    <h1 className="font-normal mb-3 text-text text-2xl">
                        Why Choose Khay-Kart
                    </h1>
                    <p className=" font-normal text-sm  text-text lg:text-base">
                        We are a one-stop platform for all your fashion needs,
                        hassle-free. Buy with a peace of mind.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 place-items-center mt-9">
                    <div className="flex flex-col items-center gap-y-6">
                        <Image
                            src={"/assets/ship.svg"}
                            alt={"shipping logo"}
                            width={78}
                            height={70}
                        />
                        <div className="flex flex-col gap-y-2">
                            <p className="text-sm font-bold text-center">
                                Complimentary Shipping
                            </p>
                            <p className="text-sm text-center">
                                Enjoy free shipping on U.S. orders over $100.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-y-6">
                        <Image
                            src={"/assets/hang.svg"}
                            alt={"shipping logo"}
                            width={78}
                            height={70}
                        />
                        <div className="flex flex-col gap-y-2">
                            <p className="text-sm font-bold text-center">
                                Consciously Crafted
                            </p>
                            <p className="text-sm text-center">
                                Designed with you and the planet in mind.{" "}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-y-6">
                        <Image
                            src={"/assets/locate.svg"}
                            alt={"shipping logo"}
                            width={78}
                            height={70}
                        />
                        <div className="flex flex-col gap-y-2">
                            <p className="text-sm font-bold text-center">
                                Come Say Hi
                            </p>
                            <p className="text-sm text-center">
                                We have 11 stores across the world
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
