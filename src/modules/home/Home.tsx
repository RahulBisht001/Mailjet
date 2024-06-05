import Header from "@/shared/widgets/header/Header";
import Banner from "./elements/Banner";
import Branding from "./elements/Branding";
import Benefits from "./elements/Benefits";
import FeaturesHighlights from "./elements/FeaturesHighlights";
import Pricing from "./elements/Pricing";
import Footer from "@/shared/widgets/footer/Footer";
import Developer from "./elements/Developer";
import {LampText} from "./elements/LampText";
import {HeroHighlightDemo} from "./elements/HeroHighlight";

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Branding />
            {/* <Developer /> */}
            <LampText />
            <HeroHighlightDemo />
            {/* <Benefits /> */}
            {/* <FeaturesHighlights /> */}
            <Pricing />
            <Footer />
        </>
    );
};

export default Home;
