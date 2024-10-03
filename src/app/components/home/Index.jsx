import Header from "../global/Header";
import Footer from "../global/Footer";
import MainBenner from "./sections/MainBanner";
import OurProcess from "./sections/OurProcess";
import AboutUs from "./sections/AboutUs";
import Visions from "./sections/Visions";
import OurServices from "./sections/OurServices";
import CollageBackground from "./sections/CollageBackground";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Header />
            <main className="w-full">
                <MainBenner />
                <AboutUs />
                <OurProcess />
                <Visions />
                <OurServices />
                <CollageBackground />
                {/* <Products /> */}
            </main>
            <Footer />
        </div>
    );
}
