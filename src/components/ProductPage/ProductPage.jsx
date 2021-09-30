import TopProductDisplay from "./TopProductDisplay";
import Description from "./Description";
import OtherImages from "./OtherImages";
import SplashShield from "./SplashShield";
import Celebrity from "./Celebrity";
import Warranty from "./Warranty";
import Faq from "./Faq";
import Reviews from './Reviews';
import WriteReviews from "./WriteReviews";

export default function ProductPage() {
    return (
        <>
        <TopProductDisplay/>
        <Description/>
        <OtherImages/>
        <SplashShield />
        <Celebrity />
        <Warranty/>
        <Faq />
        <Reviews />
        <WriteReviews />
        </>
    );
}