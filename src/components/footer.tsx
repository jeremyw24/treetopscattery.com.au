import Facebook from "../icons/facebook.tsx";
import Instagram from "../icons/instagram.tsx";

const Footer = () => {
  return (
    <footer className="mt-[135px] w-full">
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6">
        {/* start */}
        <div className="col-span-1 md:col-span-2">
          <a href="/" className="">
          <img src="/treetops-logov2.jpg" alt=""></img>
          </a>
          <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray pt-[18px] pb-[33px]">
          Warm, Loving Home-Style Care.
          </p>
          <div className="flex gap-2 md:gap-[54px]">
            <a href="https://www.facebook.com/treetopscattery">
              <Facebook />
            </a>
            <a href="/">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <h5 className="text-primary-200 font-dm text-[18px] lg:text-[25px] leading-loose">
            Pages
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href="/about"
              className="tracking-tight text-base lg:text-[18px] lg:leading-[33px] font-jost text-text-gray"
            >
              About Us
            </a>
            <a
              href="/services"
              className="tracking-tight text-base lg:text-[18px] lg:leading-[33px] font-jost text-text-gray"
            >
              Services
            </a>
            <a
              href="/contact"
              className="tracking-tight text-base lg:text-[18px] lg:leading-[33px] font-jost text-text-gray"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <h5 className="text-primary-200 font-dm text-[18px] lg:text-[18px] leading-loose">
            Services
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[18px] lg:leading-[33px] font-jost text-text-gray">
              Cat Boarding
            </p>
            <p className="tracking-tight text-base lg:text-[18px] lg:leading-[33px] font-jost text-text-gray">
              Guinea Pig Boarding
            </p>
            <p className="tracking-tight text-base lg:text-[18px] lg:leading-[33px] font-jost text-text-gray">
              Rabbit Boarding
            </p>
            <p className="tracking-tight text-base lg:text-[18px] lg:leading-[33px] font-jost text-text-gray">
              Pet Taxi
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Contact
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[18px] lg:leading-[33px] font-jost text-text-gray">
              222 Coolart Road, Moorooduc Victoria 3913
            </p>
            <p className="tracking-tight text-base lg:text-[18px] lg:leading-[33px] font-jost text-text-gray">
              bookings@treetopscattery.com.au
            </p>
            <p className="tracking-tight text-base lg:text-[18px] lg:leading-[33px] font-jost text-text-gray">
              (03)59 77 5328
            </p>
          </div>
        </div>

        {/* End */}
      </div>
    </footer>
  );
};

export default Footer;
