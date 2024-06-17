import Navbar from "../components/Navbar";
export default function Home() {
    return (
        <main>
            <Navbar />
            <section className="h-screen bg-top bg-cover bg-bg-hero bg-no-repeat w-full">
                <div className="flex flex-col gap-y-3.5 w-full top-[50%] items-center gap-3 text-white absolute md:top-[60%] md:left-[4%]  z-20  md:w-[40%]">
                    <h3 className="font-normal text-3xl md:text-4xl font-Inter">Your Cozy Era</h3>
                    <p className="font-normal text-lg md:text-2xl text-center">
                        Get peak comfy-chic <br /> with new winter essentials.
                    </p>
                    <button
                        type="button"
                        className="uppercase w-[40%] mx-autofont-normal text-sm text-text bg-white py-2 md:py-3"
                    >
                        shop now
                    </button>
                </div>
            </section>
        </main>
    );
}
