import { Link } from "react-router-dom";
import Rise from "../../../public/rise.png";
import Button from "../../component/button";
import PlaceholderImage from "../../assets/images/grey.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ProductTour {
  splashImage: string;
  indexOne: boolean;
  progress: number;
  headTextOne: string;
  headTextTwo: string;
  strongText: string;
  linkTo: string;
  backLink?: string;
}

const ProductTour = ({
  headTextOne,
  headTextTwo,
  indexOne,
  strongText,
  progress,
  linkTo,
  splashImage,
  backLink = "",
}: ProductTour) => {
  return (
    <>
      <div className="px-[10px] pt-[19px] pb-[10px] min-h-screen relative md:hidden">
        <div className="flex items-center justify-between pb-8">
          <img src={Rise} alt="rise.png" width="80" />
          <Link
            to="/login"
            className="text-black py-2 px-8 rounded-3xl backdrop-blur-[6px] bg-[#DFDFDF] text-center font-['Montserrat'] text-xs tracking-[0.36px]"
          >
            skip
          </Link>
        </div>
        <h2 className="text-[25px] px-1 font-medium tracking-[0.75px] leading-10 mb-5">
          {headTextOne} <br /> {headTextTwo}{" "}
          <span className="text-[#204D6C] font-extrabold">{strongText}</span>
        </h2>
        <p className="w-[40ch] px-1 text-xs leading-5 tracking-[0.36px] text-[#292929]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
        </p>
        <div className="pt-9">
          <LazyLoadImage
            className="w-full"
            src={splashImage}
            placeholderSrc={PlaceholderImage}
            effect="blur"
            alt="onboarding-rectangle-6.png"
          />
          <input
            type="range"
            name="onboarding-progress"
            id="onboarding-progress"
            value={progress}
            className="w-[45%] accent-[#8BC83F] text-white border-none outline-none absolute bottom-28 left-1/2 -translate-x-1/2"
          />
          <div className="absolute flex flex-row-reverse gap-x-4 items-center justify-center bottom-11 w-full">
            <Link to={linkTo}>
              <Button text="Next" className="" />
            </Link>
            {!indexOne && (
              <Link
                to={backLink}
                className="flex items-center justify-center rounded-full bg-white text-black w-[54px] aspect-square text-2xl"
              >
                &#x2B05;
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTour;
