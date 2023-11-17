import OnboardingImgThree from "../../assets/images/onboarding-image-3.png";
import Rise from "../../../public/rise.png";
import Button from "../../component/button";
import DesktopWarning from "../../component/desktopWarning";
import { Link } from "react-router-dom";

const splashScreen = () => {
  return (
    <>
      <div className="text-white fader h-screen relative flex flex-col items-center justify-center md:hidden">
        <img
          className="absolute w-full h-full blur-bg"
          src={OnboardingImgThree}
          alt="onboarding-image-3.png"
        />
        <div className="z-10">
          <img src={Rise} className="w-full aspect-square" alt="rise.png" />
          <h1 className="text-4xl -m-7 font-bold -tracking-[1.08px] text-center">
            Rise <br />
            Real Estate
          </h1>
        </div>
        <div className="z-10 absolute bottom-4">
          <Link to="/onboarding-tour-one">
            <Button text="let's start" className="mb-8" />
          </Link>
          <div className="">
            <span className="text-xs block text-center tracking-[0.3px] font-['Raleway']">
              Made with love
            </span>
            <br />
            <span className="text-xs block text-center tracking-[0.3px] font-['Montserrat'] font-bold">
              v.1.0
            </span>
          </div>
        </div>
      </div>
      <DesktopWarning />
    </>
  );
};

export default splashScreen;
