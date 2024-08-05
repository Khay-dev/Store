import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

interface Category {
	productName: string;
	productImage: string;
	index: string;
}

interface Products {
	productName: string;
	productImage: string;
	productType: string;
	price: number;
	index: string;
}

const Home: FC = () => {
	return (
		<div className="mx-auto h-full px-0 w-full container">
			<main className="">
				<Navbar />
				<div className="bg-[url('/assets/home.png')] bg-center bg-cover bg-no-repeat h-screen w-full">
					<div className="flex flex-col gap-y-3.5 text-white lg:p-40 lg:py-48 pt-60 w-[90%] mx-auto lg:mx-0 lg:w-fit text-center">
						<h3 className="font-normal font-inter text-5xl">Your Cozy Era</h3>
						<p className="font-normal font-inter text-2xl">
							Get peak comfy-chic <br /> with new winter essentials.
						</p>
						<Link href="">
							<button
								type="button"
								className="uppercase font-inter w-[80%] mx-auto lg:mx-0 lg:w-full font-normal text-sm text-[#262626] bg-white py-3"
							>
								shop now
							</button>
						</Link>
					</div>
				</div>
				<Category />
				<Favourite />
				<Testimonial />
				<Fashion />
				<Footer />
			</main>
		</div>
	);
};

const Category: FC = () => {
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
		<div>
			<div className="lg:px-10 px-7 py-14">
				<h1 className="text-center font-normal font-inter text-2xl">
					Shop by Category
				</h1>
				<div className="scroll flex overflow-x-scroll snap-mandatory snap-x no-scrollbar gap-x-2 mt-5">
					{catergories.map((category) => (
						<div
							className="flex flex-col shrink-0 items-center justify-center gap-y-3"
							key={category.index}
						>
							<Image
								src={category.productImage}
								alt={category.productName}
								width={230}
								height={263}
							/>
							<Link
								href=""
								className="uppercase underline font-normal font-inter text-sm lg:text-sm "
							>
								{category.productName}
							</Link>
						</div>
					))}
				</div>
        </div>
				<section className="lg:px-10 px-7 lg:py-14  pb-14 pt-5">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
						<div className=" bg-[url('/assets/new.png')] bg-center bg-cover bg-no-repeat h-[500px] w-full flex flex-col gap-y-3.5 items-center justify-center">
							<h1 className="font-normal text-2xl text-white">New Arrivals</h1>
							<button
								type="button"
								className="uppercase w-[60%] font-normal text-sm text-[#262626] bg-white py-2 md:py-3"
							>
								Shop the latest .
							</button>
						</div>
						<div className=" bg-[url('/assets/best.png')] bg-center bg-cover bg-no-repeat h-[500px] w-full flex flex-col gap-y-3.5 items-center justify-center">
							<h1 className="font-normal text-2xl text-white">Best Sellers</h1>
							<button
								type="button"
								className="uppercase w-[60%] font-normal text-sm text-[#262626] bg-white py-2 md:py-3"
							>
								Shop the favourite.
							</button>
						</div>
						<div className=" bg-[url('/assets/holiday.png')] bg-center bg-cover bg-no-repeat h-[500px] w-full flex flex-col gap-y-3.5 items-center justify-center">
							{" "}
							<h1 className="font-normal text-2xl text-white">
								The Holiday Outfit
							</h1>
							<button
								type="button"
								className="uppercase w-[60%]  font-normal text-sm text-[#262626] bg-white py-2 md:py-3"
							>
								Shop the occasion
							</button>
						</div>
					</div>
				</section>
				<section className=" flex flex-col justify-center items-center text-center px-5 py-9 bg-[url('/assets/bgsec.png')] bg-no-repeat bg-center bg-cover relative  h-auto lg:h-[40vh] ">
					<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
					<div className="relative z-10">
						<h2 className="text-white text-2xl lg:text-3xl font-normal font-inter">
							We’re on a Mission To Clean Up the Industry
						</h2>
						<p className="text-white text-sm lg:text-base font-normal font-inter">
							Read about our progress in our latest Impact Report.
						</p>
						<Link href="">
							<button
								type="button"
								className="font-inter uppercase mx-auto mt-5 font-normal text-sm text-[#262626] bg-white py-2 px-10"
							>
								learn more
							</button>
						</Link>
					</div>
				</section>
			</div>
	);
};

const Favourite: FC = () => {
	const products: Products[] = [
		{
			productName: "The Waffle Long-Sleeve Crew",
			productImage: "/assets/fav1.png",
			productType: "Bone",
			price: 60,
			index: crypto.randomUUID(),
		},
		{
			productName: "The Slim Stretch Jean",
			productImage: "/assets/fav2.png",
			productType: "Dark Indigo",
			price: 148,
			index: crypto.randomUUID(),
		},
		{
			productName: "The Bomber Jacket  ",
			productImage: "/assets/fav3.png",
			productType: "Toasted Coconut",
			price: 98,
			index: crypto.randomUUID(),
		},
		{
			productName: " The Essential Organic Crew",
			productImage: "/assets/fav4.png",
			productType: "Suade Blue",
			price: 30,
			index: crypto.randomUUID(),
		},
		{
			productName: "The Essential  Crew",
			productImage: "/assets/fav1.png",
			productType: "Packet White",
			price: 80,
			index: crypto.randomUUID(),
		},
		{
			productName: "The Cashmere Crew",
			productImage: "/assets/fav2.png",
			productType: "Vintage Pink",
			price: 70,
			index: crypto.randomUUID(),
		},
	];

	return (
		<div className="w-fullr lg:w-11/12 mx-auto my-10 lg:my-20">
			<div className="text-center">
				<h1 className="font-inter text-xl lg:text-2xl font-normal lg:mb-2 text-black">
					Khay-Kart Favourite
				</h1>
				<p className="font-inter font-normal text-sm lg:text-base text-black">
					Beautifully Functional. Purposefully Designed. Consciously Crafted.
				</p>
			</div>
			<div className="scroll flex overflow-x-scroll snap-mandatory snap-x no-scrollbar gap-x-2 mt-4 lg:mt-8">
				{products.map((item) => (
					<div
						className="flex flex-col shrink-0 items-center justify-center gap-y-3"
						key={item.index}
					>
						<Image
							src={item.productImage}
							alt={item.productName}
							width={282}
							height={420}
						/>
						<div className="w-full flex justify-between">
							<div className="flex flex-col gap-y-1">
								<p className="text-xs font-normal font-inter text-[#262626]">
									{item.productName}
								</p>
								<span className="text-xs font-normal font-inter text-[#737373]">
									{item.productType}
								</span>
							</div>
							<div>
								<p className="text-xs font-normal font-inter text-[#262626]">
									${item.price}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const Testimonial: FC = () => {
	return (
		<div className="md:w-11/12 lg:w-[78%] mx-auto mb-24 flex flex-col lg:flex-row items-center justify-between gap-y-5 lg:gap-y-0 lg:gap-x-10">
			<div className="flex flex-col items-center lg:items-start lg:w-full">
				<span className="font-normal font-inter text-base">
					People Are Talking
				</span>
				<div className="mt-8">
					<svg
						width="78"
						height="14"
						viewBox="0 0 78 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>5-star-rating</title>
						<g clip-path="url(#clip0_79_744)">
							<path
								d="M12.824 6.25515L10.3576 8.40765L11.0965 11.6123C11.1356 11.7799 11.1244 11.9552 11.0644 12.1164C11.0044 12.2777 10.8982 12.4176 10.759 12.5188C10.6199 12.62 10.454 12.6779 10.2822 12.6854C10.1103 12.6928 9.94005 12.6494 9.79271 12.5606L6.99763 10.8653L4.20857 12.5606C4.06122 12.6494 3.89097 12.6928 3.7191 12.6854C3.54723 12.6779 3.38136 12.62 3.24224 12.5188C3.10311 12.4176 2.9969 12.2777 2.93689 12.1164C2.87688 11.9552 2.86572 11.7799 2.90482 11.6123L3.64255 8.41094L1.1756 6.25515C1.04512 6.14262 0.950768 5.99407 0.904379 5.82812C0.857989 5.66218 0.861626 5.48624 0.914833 5.32235C0.968039 5.15847 1.06845 5.01394 1.20347 4.9069C1.33848 4.79985 1.5021 4.73505 1.6738 4.72062L4.92552 4.43898L6.19482 1.41148C6.2611 1.25262 6.37291 1.11693 6.51615 1.02148C6.6594 0.926036 6.82768 0.875107 6.99982 0.875107C7.17195 0.875107 7.34023 0.926036 7.48348 1.02148C7.62673 1.11693 7.73853 1.25262 7.80482 1.41148L9.07794 4.43898L12.3286 4.72062C12.5003 4.73505 12.6639 4.79985 12.7989 4.9069C12.9339 5.01394 13.0343 5.15847 13.0875 5.32235C13.1407 5.48624 13.1444 5.66218 13.098 5.82812C13.0516 5.99407 12.9573 6.14262 12.8268 6.25515H12.824Z"
								fill="black"
							/>
						</g>
						<g clip-path="url(#clip1_79_744)">
							<path
								d="M28.824 6.25515L26.3576 8.40765L27.0965 11.6123C27.1356 11.7799 27.1244 11.9552 27.0644 12.1164C27.0044 12.2777 26.8982 12.4176 26.759 12.5188C26.6199 12.62 26.454 12.6779 26.2822 12.6854C26.1103 12.6928 25.9401 12.6494 25.7927 12.5606L22.9976 10.8653L20.2086 12.5606C20.0612 12.6494 19.891 12.6928 19.7191 12.6854C19.5472 12.6779 19.3814 12.62 19.2422 12.5188C19.1031 12.4176 18.9969 12.2777 18.9369 12.1164C18.8769 11.9552 18.8657 11.7799 18.9048 11.6123L19.6426 8.41094L17.1756 6.25515C17.0451 6.14262 16.9508 5.99407 16.9044 5.82812C16.858 5.66218 16.8616 5.48624 16.9148 5.32235C16.968 5.15847 17.0684 5.01394 17.2035 4.9069C17.3385 4.79985 17.5021 4.73505 17.6738 4.72062L20.9255 4.43898L22.1948 1.41148C22.2611 1.25262 22.3729 1.11693 22.5162 1.02148C22.6594 0.926036 22.8277 0.875107 22.9998 0.875107C23.1719 0.875107 23.3402 0.926036 23.4835 1.02148C23.6267 1.11693 23.7385 1.25262 23.8048 1.41148L25.0779 4.43898L28.3286 4.72062C28.5003 4.73505 28.6639 4.79985 28.7989 4.9069C28.9339 5.01394 29.0343 5.15847 29.0875 5.32235C29.1407 5.48624 29.1444 5.66218 29.098 5.82812C29.0516 5.99407 28.9573 6.14262 28.8268 6.25515H28.824Z"
								fill="black"
							/>
						</g>
						<g clip-path="url(#clip2_79_744)">
							<path
								d="M44.824 6.25515L42.3576 8.40765L43.0965 11.6123C43.1356 11.7799 43.1244 11.9552 43.0644 12.1164C43.0044 12.2777 42.8982 12.4176 42.759 12.5188C42.6199 12.62 42.454 12.6779 42.2822 12.6854C42.1103 12.6928 41.9401 12.6494 41.7927 12.5606L38.9976 10.8653L36.2086 12.5606C36.0612 12.6494 35.891 12.6928 35.7191 12.6854C35.5472 12.6779 35.3814 12.62 35.2422 12.5188C35.1031 12.4176 34.9969 12.2777 34.9369 12.1164C34.8769 11.9552 34.8657 11.7799 34.9048 11.6123L35.6426 8.41094L33.1756 6.25515C33.0451 6.14262 32.9508 5.99407 32.9044 5.82812C32.858 5.66218 32.8616 5.48624 32.9148 5.32235C32.968 5.15847 33.0684 5.01394 33.2035 4.9069C33.3385 4.79985 33.5021 4.73505 33.6738 4.72062L36.9255 4.43898L38.1948 1.41148C38.2611 1.25262 38.3729 1.11693 38.5162 1.02148C38.6594 0.926036 38.8277 0.875107 38.9998 0.875107C39.1719 0.875107 39.3402 0.926036 39.4835 1.02148C39.6267 1.11693 39.7385 1.25262 39.8048 1.41148L41.0779 4.43898L44.3286 4.72062C44.5003 4.73505 44.6639 4.79985 44.7989 4.9069C44.9339 5.01394 45.0343 5.15847 45.0875 5.32235C45.1407 5.48624 45.1444 5.66218 45.098 5.82812C45.0516 5.99407 44.9573 6.14262 44.8268 6.25515H44.824Z"
								fill="black"
							/>
						</g>
						<g clip-path="url(#clip3_79_744)">
							<path
								d="M60.824 6.25515L58.3576 8.40765L59.0965 11.6123C59.1356 11.7799 59.1244 11.9552 59.0644 12.1164C59.0044 12.2777 58.8982 12.4176 58.759 12.5188C58.6199 12.62 58.454 12.6779 58.2822 12.6854C58.1103 12.6928 57.9401 12.6494 57.7927 12.5606L54.9976 10.8653L52.2086 12.5606C52.0612 12.6494 51.891 12.6928 51.7191 12.6854C51.5472 12.6779 51.3814 12.62 51.2422 12.5188C51.1031 12.4176 50.9969 12.2777 50.9369 12.1164C50.8769 11.9552 50.8657 11.7799 50.9048 11.6123L51.6426 8.41094L49.1756 6.25515C49.0451 6.14262 48.9508 5.99407 48.9044 5.82812C48.858 5.66218 48.8616 5.48624 48.9148 5.32235C48.968 5.15847 49.0684 5.01394 49.2035 4.9069C49.3385 4.79985 49.5021 4.73505 49.6738 4.72062L52.9255 4.43898L54.1948 1.41148C54.2611 1.25262 54.3729 1.11693 54.5162 1.02148C54.6594 0.926036 54.8277 0.875107 54.9998 0.875107C55.1719 0.875107 55.3402 0.926036 55.4835 1.02148C55.6267 1.11693 55.7385 1.25262 55.8048 1.41148L57.0779 4.43898L60.3286 4.72062C60.5003 4.73505 60.6639 4.79985 60.7989 4.9069C60.9339 5.01394 61.0343 5.15847 61.0875 5.32235C61.1407 5.48624 61.1444 5.66218 61.098 5.82812C61.0516 5.99407 60.9573 6.14262 60.8268 6.25515H60.824Z"
								fill="black"
							/>
						</g>
						<g clip-path="url(#clip4_79_744)">
							<path
								d="M76.824 6.25515L74.3576 8.40765L75.0965 11.6123C75.1356 11.7799 75.1244 11.9552 75.0644 12.1164C75.0044 12.2777 74.8982 12.4176 74.759 12.5188C74.6199 12.62 74.454 12.6779 74.2822 12.6854C74.1103 12.6928 73.9401 12.6494 73.7927 12.5606L70.9976 10.8653L68.2086 12.5606C68.0612 12.6494 67.891 12.6928 67.7191 12.6854C67.5472 12.6779 67.3814 12.62 67.2422 12.5188C67.1031 12.4176 66.9969 12.2777 66.9369 12.1164C66.8769 11.9552 66.8657 11.7799 66.9048 11.6123L67.6426 8.41094L65.1756 6.25515C65.0451 6.14262 64.9508 5.99407 64.9044 5.82812C64.858 5.66218 64.8616 5.48624 64.9148 5.32235C64.968 5.15847 65.0684 5.01394 65.2035 4.9069C65.3385 4.79985 65.5021 4.73505 65.6738 4.72062L68.9255 4.43898L70.1948 1.41148C70.2611 1.25262 70.3729 1.11693 70.5162 1.02148C70.6594 0.926036 70.8277 0.875107 70.9998 0.875107C71.1719 0.875107 71.3402 0.926036 71.4835 1.02148C71.6267 1.11693 71.7385 1.25262 71.8048 1.41148L73.0779 4.43898L76.3286 4.72062C76.5003 4.73505 76.6639 4.79985 76.7989 4.9069C76.9339 5.01394 77.0343 5.15847 77.0875 5.32235C77.1407 5.48624 77.1444 5.66218 77.098 5.82812C77.0516 5.99407 76.9573 6.14262 76.8268 6.25515H76.824Z"
								fill="black"
							/>
						</g>
						<defs>
							<clipPath id="clip0_79_744">
								<rect width="14" height="14" fill="white" />
							</clipPath>
							<clipPath id="clip1_79_744">
								<rect
									width="14"
									height="14"
									fill="white"
									transform="translate(16)"
								/>
							</clipPath>
							<clipPath id="clip2_79_744">
								<rect
									width="14"
									height="14"
									fill="white"
									transform="translate(32)"
								/>
							</clipPath>
							<clipPath id="clip3_79_744">
								<rect
									width="14"
									height="14"
									fill="white"
									transform="translate(48)"
								/>
							</clipPath>
							<clipPath id="clip4_79_744">
								<rect
									width="14"
									height="14"
									fill="white"
									transform="translate(64)"
								/>
							</clipPath>
						</defs>
					</svg>
				</div>

				<h4 className="font-normal font-inter text-2xl mt-3 text-center lg:text-left">
					“Love this shirt! Fits perfectly and <br /> the fabric is thick
					without <br /> being stiff.”
				</h4>
				<p className="font-normal text-sm font-inter mt-5">
					-- JonSnSF, The Heavyweight Overshirt
				</p>
			</div>
			<div className="w-11/12 flex items-center justify-center lg:w-full">
				<Image
					src={"/assets/review.png"}
					alt="testimonial"
					width={530}
					height={695}
					className="w-full aspect-[530/695]"
				/>
			</div>
		</div>
	);
};

const Fashion: FC = () => {
	return (
		<div>
			<div className="w-11/12 lg:w-[70%] mx-auto  flex flex-col lg:flex-row items-center gap-y-5 lg:gap-y-0 lg:gap-x-5 border-b-4 border-t-4 lg:px-0 px-7 lg:py-14 pb-14 pt-7 ">
				<div>
					<p className="text-center font-inter font-normal text-2xl mb-5">
						Our Holiday Gift Picks
					</p>
					<Image
						src="/assets/Gift.png"
						alt=""
						width={505}
						height={626}
						className="transition-grayscale duration-500 hover:grayscale w-full aspect-[505/626]"
					/>
					<div className="flex flex-col justify-center items-center gap-y-2 mt-3">
						<span className="font-normal font-inter text-center text-[#262626] text-sm">
							The best presents for everyone on your list.
						</span>
						<Link href="" className="underline text-sm font-inter font-normal">
							Read More
						</Link>
					</div>
				</div>
				<div>
					<p className="text-center font-inter font-normal text-2xl mb-5">
						Cleaner Fashion
					</p>
					<Image
						src="/assets/Fashion.png"
						alt=""
						width={505}
						height={626}
						className="transition-grayscale duration-500 hover:grayscale w-full aspect-[505/626]"
					/>
					<div className="flex flex-col justify-center items-center gap-y-2 mt-3">
						<span className="font-normal font-inter text-center text-[#262626] text-sm">
							See the sustainability efforts behind each of our products.
						</span>
						<Link href="" className="underline text-sm font-inter font-normal">
							Learn More
						</Link>
					</div>
				</div>
			</div>
			<div className="w-11/12 mx-auto my-10 lg:my-20 flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:gap-x-20">
				<div className="flex flex-col items-center justify-center">
					<Image
						src={"/assets/ship.svg"}
						alt="everlane"
						width={78}
						height={78}
						className="mb-5"
					/>
					<p className="font-inter font-semibold text-sm">
						Complimentary Shipping
					</p>
					<span className="font-normal font-inter text-sm mt-1">
						Enjoy free shipping on U.S. orders over $100.
					</span>
				</div>
				<div className="flex flex-col items-center justify-center">
					<Image
						src={"/assets/hang.svg"}
						alt="everlane"
						width={78}
						height={78}
						className="mb-5"
					/>
					<p className="font-inter font-semibold text-sm">
						Consciously Crafted
					</p>
					<span className="font-normal font-inter text-sm mt-1">
						Designed with you and the planet in mind.
					</span>
				</div>
				<div className="flex flex-col items-center justify-center">
					<Image
						src={"/assets/locate.svg"}
						alt="everlane"
						width={78}
						height={78}
						className="mb-5"
					/>
					<p className="font-inter font-semibold text-sm">Come Say Hi</p>
					<span className="font-normal font-inter text-sm mt-1">
						We have 11 stores across the U.S.
					</span>
				</div>
			</div>
		</div>
	);
};

export default Home;
