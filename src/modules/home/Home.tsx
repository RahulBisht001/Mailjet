import Header from "@/shared/widgets/header/Header";
import Banner from "./features/Banner";
import Branding from "./features/Branding";
import Benefits from "./features/Benefits";
import FeaturesHighlights from "./features/FeaturesHighlights";
import Pricing from "./features/Pricing";
import Footer from "@/shared/widgets/footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Branding />
            <Benefits />
            <FeaturesHighlights />
            <Pricing />
            <Footer />
        </>
    );
};

export default Home;
