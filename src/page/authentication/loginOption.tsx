import { Link } from "react-router-dom";
import Button from "../../component/button";
import LoginRect8 from "../../assets/images/login-rectangle-8.png";
import LoginRect9 from "../../assets/images/login-rectangle-9.png";
import LoginRect10 from "../../assets/images/login-rectangle-10.png";
import LoginRect11 from "../../assets/images/login-rectangle-11.png";
import Placeholder from "../../assets/images/grey.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  EmailIconSm,
  FacebookIcon,
  GoogleIcon,
} from "../../assets/icons/socialMedia";

const LoginOption = () => {
  return (
    <div className="px-3 pt-4 pb-6 md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <LazyLoadImage
            width="100%"
            className="max-w-[250px]"
            placeholderSrc={Placeholder}
            src={LoginRect8}
            alt="modern house"
          />
        </div>
        <div>
          <LazyLoadImage
            width="100%"
            className="max-w-[250px]"
            placeholderSrc={Placeholder}
            src={LoginRect9}
            alt="modern house"
          />
        </div>
        <div>
          <LazyLoadImage
            width="100%"
            className="max-w-[250px]"
            placeholderSrc={Placeholder}
            src={LoginRect10}
            alt="modern house"
          />
        </div>
        <div>
          <LazyLoadImage
            width="100%"
            className="max-w-[250px]"
            placeholderSrc={Placeholder}
            src={LoginRect11}
            alt="modern house"
          />
        </div>
      </div>
      <p className="text-[#252B5C] text-2xl font-medium leading-10 tracking-[0.75px] mt-7 mb-6">
        <span className="text-[#1F4C6B] font-extrabold"></span> Ready to
        explore?
      </p>
      <Link to="/login/form" className="flex items-center justify-center">
        <Button text="Continue with Email" icon={<EmailIconSm />} />
      </Link>
      <div className="flex items-center justify-between pt-10 pb-5 px-4">
        <span className="w-[45%] inline-block h-[1.3px] bg-[#ECEDF3]"></span>
        <span className="text-[#A1A5C1] text-[10px] font-semibold text-center tracking-[0.3px] font-['Raleway']">
          OR
        </span>
        <span className="w-[45%] inline-block h-[1.3px] bg-[#ECEDF3]"></span>
      </div>
      <div className="flex items-center justify-between gap-x-[10px] pb-9">
        <div className="w-full flex items-center justify-center px-0 py-[22px] rounded-3xl bg-[#F5F4F8]">
          <GoogleIcon />
        </div>
        <div className="w-full flex items-center justify-center px-0 py-[22px] rounded-3xl bg-[#F5F4F8]">
          <FacebookIcon />
        </div>
      </div>
      <small className="text-center block">
        Don't have an account? <Link to="/signup">Register</Link>
      </small>
    </div>
  );
};

export default LoginOption;
