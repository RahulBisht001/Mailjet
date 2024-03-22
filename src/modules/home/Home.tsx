import Header from "@/shared/widgets/header/Header";
import Banner from "./elements/Banner";
import Branding from "./elements/Branding";
import Benefits from "./elements/Benefits";
import FeaturesHighlights from "./elements/FeaturesHighlights";
import Pricing from "./elements/Pricing";
import Footer from "@/shared/widgets/footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Branding />
            <Benefits />
            {/* <FeaturesHighlights /> */}
            <Pricing />
            <Footer />
        </>
    );
};

export default Home;
