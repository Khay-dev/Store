import Footer from "../../../components/ui/Footer";
import Navbar from "../../../components/ui/Navbar";

const page = ({ params }: any) => {
    console.log(params.menId);

    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-between gap-y-10 lg:flex-row w-11/12 mx-auto my-20">
                <h1>This is me {params.menId}</h1>
            </div>
            <Footer />
        </div>
    );
};

export default page;
