import ProductTour from "./productTour";
import OnboardingImageSix from "../../assets/images/onboarding-rectangle-6.png";
import OnboardingImageSeven from "../../assets/images/onboarding-rectangle-7.png";
import OnboardingImageEight from "../../assets/images/onboarding-rectangle-8.png";
import Error from "../error";
interface TourProps {
  index: number;
}

const Tour = ({ index }: TourProps) => {
  switch (index) {
    case 1:
      return (
        <ProductTour
          headTextOne="Find best place"
          headTextTwo="to stay in"
          indexOne
          progress={33.33}
          splashImage={OnboardingImageSix}
          strongText="good price"
          linkTo="/onboarding-tour-two"
          key={1}
        />
      );
    case 2:
      return (
        <ProductTour
          headTextOne="Fast sell your property"
          headTextTwo="in just"
          indexOne={false}
          progress={66.67}
          splashImage={OnboardingImageSeven}
          strongText="one click"
          linkTo="/onboarding-tour-three"
          backLink="/onboarding-tour-one"
          key={2}
        />
      );
    case 3:
      return (
        <ProductTour
          headTextOne="Discover for your future"
          headTextTwo="house the"
          indexOne={false}
          progress={100}
          splashImage={OnboardingImageEight}
          strongText="perfect choice"
          linkTo="/login"
          backLink="/onboarding-tour-two"
          key={3}
        />
      );
    default:
      return <Error />;
  }
};

export default Tour;
