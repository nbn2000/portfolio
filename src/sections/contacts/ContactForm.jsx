import { useRef } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_2homluq",
      "template_qi8lf7a",
      form.current,
      "JTqrTQB8Z-nQ48-b3"
    );
    e.target.reset();
    swal("Thank you!", "Message Successfully Sent!", "success");
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="px-[10px] md:px-[32px] flex flex-col justify-start items-start gap-[30px]"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-[16px] gap-y-[30px] w-full">
        <div className="relative h-11 w-full">
          <input
            type="text"
            name="firstname"
            placeholder="John"
            required
            className="peer h-full w-full border-b border-[rgba(255,255,255,0.2)] border-solid bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-[rgba(255,255,255,0.2)]  focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            First Name
          </label>
        </div>
        <div className="relative h-11 w-full ">
          <input
            type="text"
            name="lastname"
            placeholder="Doe"
            required
            className="peer h-full w-full border-b border-[rgba(255,255,255,0.2)] border-solid bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-[rgba(255,255,255,0.2)]  focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Last Name
          </label>
        </div>
      </div>

      <div className="relative h-11 w-full min-w-[200px]">
        <input
          placeholder="example@yourmail.com"
          type="email"
          name="email"
          required
          className="peer h-full w-full border-b border-[rgba(255,255,255,0.2)] border-solid bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-[rgba(255,255,255,0.2)]  focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100"
        />
        <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Email
        </label>
      </div>
      <div className="relative w-full min-w-[200px]">
        <textarea
          className="peer h-full min-h-[100px] text-white w-full resize-none placeholder:text-transparent focus:placeholder:text-gray-700 border-b border-solid border-t-0 border-l-0 border-r-0  bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal   outline-0 outline transition-all placeholder-shown:border-[rgba(255,255,255,0.2)] focus:border-white focus:outline-0 border-transparent focus:border-transparent focus:ring-0"
          placeholder="Message..."
          name="message"
          rows="5"
          required
        ></textarea>
        <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2  after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white ">
          Message
        </label>
      </div>
      <button
        type="submit"
        className="border-[1px] border-solid border-[rgba(199,120,221,1)] py-[8px] px-[16px] font-[500] text-[16px] leading-[20.99px]"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
