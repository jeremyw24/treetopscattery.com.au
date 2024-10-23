import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";

const ContactInfo = () => {
  return (
    <div className="col-span-1 bg-primary-300 rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full">
      {/* <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
        Phone:
      </h5> */}
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-l font-jost tracking-tight">
        {" "}
        <Phone /> (03)59 775328 or 0419 324 577
      </h5>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-l font-jost tracking-tight">
        {" "}
        <Web /> 222 Coolart Road, Moorooduc
      </h5>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-l font-jost tracking-tight">
        {" "}
        <Mail /> bookings@treetopscattery.com.au
      </h5>
      <h2 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">Opening Hours:</h2>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-l font-jost tracking-tight">
        Monday & Tuesday: 8:30AM - 5PM
      </h5>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-l font-jost tracking-tight">
        Wednesday: 8:30AM - 12PM
      </h5>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-l font-jost tracking-tight">
        Thursday & Friday: 8:30AM - 5PM
      </h5>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-l font-jost tracking-tight">
        Saturday: 8:30AM - 12PM
      </h5>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-l font-jost tracking-tight">
        Sunday: 8:30AM - 5PM
      </h5>
      <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
        Inspections:
      </h5>
      <h5 className="flex flex-col xl:flex-row gap-2 items-center text-l font-jost tracking-tight">
      Inspections are more than welcome, but we do ask you contact us prior to arrival - feel free to call or email to arrange a suitable time. <br/><br/> Our friendly staff will give you a personal tour of our facilities prior to booking so you can ask any questions and be 100% satisfied before leaving your cat with us.
      </h5>
    </div>
  );
};

export default ContactInfo;
