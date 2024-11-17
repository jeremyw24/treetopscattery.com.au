import React from "react";
import Button from "./button.tsx";

const ContactForm = () => {
  return (
    <div className="col-span-1 lg:col-span-2">
      <form className="w-full grid grid-cols-2 gap-x-10 gap-y-[50px]" action="https://submit-form.com/rMnhtyF7Q" data-botpoison-public-key="pk_23c283b4-3034-48f0-bc86-1206b236df71">
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            className="col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Name (required)"
            required
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            className="col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Email (required)"
            required
          />
        </label>
        {/* Phone Input */}
        <label htmlFor="phone" className="block">
          <input
            type="number"
            name="phone"
            className="col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Phone (required)"
            required
          />
        </label>
        <label htmlFor="cat-name" className="block">
        <input
            type="text"
            name="cat-name"
            className="col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Your cats name"
            required
          />
        </label>

        {/* Select Options (side by side, full width) */}
        <div className="col-span-1 lg:col-span-2">

          <div className="mt-4">
            <label htmlFor="accomodation-type" className="text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray">
              Accomodation preference:
              <select
                name="accomodation"
                id="acccomodation"
                className="border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray mt-2"
              >
                <option value="" disabled selected>Please Select Accomodation Type</option>
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
                <option value="family">Family</option>
                <option value="any">Any</option>
              </select>
            </label>
          </div>

          <div className="mt-4">
            <label htmlFor="vaccination" className="text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray">
              Current F3 Vaccination & Certificate?
              <select
                name="vaccination"
                id="vaccination"
                className="border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray mt-2"
              >
                <option value="" disabled selected>Please Select Vaccination Status</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unsure">Unsure</option>
              </select>
            </label>
          </div>

          <div className="mt-4">
            <label htmlFor="drop-off" className="text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray">
              Drop Off Date:
              <input
                type="date"
                id="drop-off"
                name="drop-off"
                placeholder="Drop Off Date"
                className="border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray mt-2"
              />
            </label>
          </div>
          <div className="mt-4">
          <label htmlFor="pick-up" className="text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray">
            Pick Up Date:
            <input
              type="date"
              id="pick-up"
              name="pick-up"
              placeholder="Pick Up Date"
              className="border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray mt-2"
            />
          </label>
          </div>
        </div>
        <textarea
          name="message"
          className="col-span-2 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
          cols={30}
          rows={3}
          placeholder="Please provide any further information such as dietary restrictions, special requests, or any additional information you would like to share."
        ></textarea>

        <div className="w-full flex justify-end col-span-2">
          <Button text="Submit" type="submit" />
        </div>
        <div className="w-full flex justify-end col-span-2">
          <p className="text-center font-dm mx-auto justify-end text-text-blue ">Please note: submission of this form does not constitute a confirmed booking. We will contact you to confirm your booking.</p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
